const userHandlerRouter = (req, res) => {
    const method = req.method; // GET POST

     if(method === 'POST' && req.path === '/api/blog/login') {
        return {
            msg: '登录接口'
        }
     }

}

module.exports = userHandlerRouter;