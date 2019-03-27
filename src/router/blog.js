const serverHandlerRouter = (req, res) => {
    const method = req.method; // GET POST
    const url = req.url;
    const path = url.split("?")[0];
    const query = url.split("?")[1];

    if(method === 'GET' && path === '/api/blog/list') {
       return {
           msg: '返回文章列表'
       }
    }

    if(method === 'GET' && path === '/api/blog/detail') {
        return {
            msg: '获取博客详情接口'
        }
     }


     if(method === 'POST' && path === '/api/blog/new') {
        return {
            msg: '新建博客接口'
        }
     }

     if(method === 'POST' && path === '/api/blog/update') {
        return {
            msg: '更新文章接口'
        }
     }

     if(method === 'POST' && path === '/api/blog/delete') {
        return {
            msg: '删除文章接口'
        }
     }
}

module.exports = serverHandlerRouter;