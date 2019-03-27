const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split("?")[0];
    const query = url.split("?")[1];

    res.setHeader('Content-type', 'application/json');
    let resData = {
        method, 
        url,
        path,
        query
    }
    if(method == 'GET') {
        res.end(JSON.stringify(resData));
    }

    if(method == 'POST') {
        let postData = ''
        res.on('data', chunk => postData += chunk.toString());
        resData.postData = postData
        res.on('end', () => {
            res.end(JSON.stringify(resData));
        })
    }
})

server.listen(8000, ()=> {
    console.log("server is ok")
})