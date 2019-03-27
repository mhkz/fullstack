const { getList, getDetail } = require('../controller/blog.js')
const {ErrorModel, SuccessModel} = require('../model/resModel')

const serverHandlerRouter = (req, res) => {
    const method = req.method; // GET POST
   

    if(method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }

    if(method === 'GET' && req.path === '/api/blog/detail') {
        let id = req.query.id
        const detailData = getDetail(id)
        return new SuccessModel(detailData)
     }


     if(method === 'POST' && req.path === '/api/blog/new') {
        return {
            msg: '新建博客接口'
        }
     }

     if(method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: '更新文章接口'
        }
     }

     if(method === 'POST' && req.path === '/api/blog/delete') {
        return {
            msg: '删除文章接口'
        }
     }
}

module.exports = serverHandlerRouter;