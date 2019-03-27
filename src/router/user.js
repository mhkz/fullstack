const userHandlerRouter = (req, res) => {
    const method = req.method; // GET POST
    const url = req.url;
    const path = url.split("?")[0];
    const query = url.split("?")[1];

    
     if(method === 'POST' && path === '/api/blog/login') {
        return {
            msg: '登录接口'
        }
     }

}

module.exports = userHandlerRouter;