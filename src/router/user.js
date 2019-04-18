const {loginCheck} = require('../controller/user')
const {ErrorModel, SuccessModel} = require('../model/resModel')
const userHandlerRouter = (req, res) => {
    const method = req.method; // GET POST

     if(method === 'POST' && req.path === '/api/blog/login') {
       const {username, password} = req.body
       const result = loginCheck(username, password)
       return result.then(data=>{
            if(data.username) {
               return new SuccessModel()
            }

               return new ErrorModel("登录失败，请重试")
       })

     }

}

module.exports = userHandlerRouter;