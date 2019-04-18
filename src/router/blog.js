const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog.js')
const { ErrorModel, SuccessModel } = require('../model/resModel')

const serverHandlerRouter = (req, res) => {
    const method = req.method; // GET POST
    let id = req.query.id || ''

    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author, keyword)

        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    if (method === 'GET' && req.path === '/api/blog/detail') {
        const result = getDetail(id)
        return result.then(data => new SuccessModel(data))

    }


    if (method === 'POST' && req.path === '/api/blog/new') {
        req.body.author = 'zhangsan'
        const result = newBlog(req.body)
        return result.then(data => new SuccessModel(data))
    }

    // 更新博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(id, req.body)
        return result.then(val => {
            if (val) {
                return new SuccessModel(val)
            } else {
                return new ErrorModel('博客更新失败')
            }
        })

    }

    if (method === 'POST' && req.path === '/api/blog/delete') {

        const author = "zhangsan"
        const result = delBlog(id, author)
        return result.then(resultData => {
            if (resultData) {
                return new SuccessModel(resultData)
            } else {
                return new ErrorModel('博客更新失败')
            }
        })
    }
}

module.exports = serverHandlerRouter;