const querystring = require("querystring");
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

// 处理 post data
const getPostData = (req) => {
    let promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }

        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }

        let postData = ''
        req.on('data', chunk => postData += chunk.toString());
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    // 设置返回格式
    res.setHeader('Content-type', 'application/json');

    const url = req.url;

    req.path = url.split("?")[0];
    // 解析 query
    req.query = querystring.parse(url.split("?")[1]);


    // 处理 post data
    getPostData(req).then(postData => {
        req.body = postData
        // 处理 blog 路由
        const blogResult = handleBlogRouter(req, res)
        if(blogResult) {
           return blogResult.then(result => {
                res.end(JSON.stringify(result))
            })
            return
        }


        // 处理 user 路由
        const userResult = handleUserRouter(req, res)
        if (userResult) {
            userResult.then(userData => res.end(JSON.stringify(userData)))
            return    
        }

          // 未命中路由，返回 404
        res.writeHead(404, { "Content-type": "text/plain" })
        res.write("404 Not Found\n")
        res.end()

    })
}


module.exports = serverHandle;