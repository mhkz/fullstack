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
            console.log("=====listData====", listData)
            return new SuccessModel(listData)
        })
    }

    if (method === 'GET' && req.path === '/api/blog/detail') {
        const detailData = getDetail(id)
        return new SuccessModel(detailData)
    }


    if (method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }

    // 更新博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const data = updateBlog(id, req.body)
        if (data) {
            return new SuccessModel(data)
        } else {
            return new ErrorModel('博客更新失败')
        }
    }

    if (method === 'POST' && req.path === '/api/blog/delete') {
        const data = delBlog(id)
        if (data) {
            return new SuccessModel(data)
        } else {
            return new ErrorModel('博客更新失败')
        }
    }
}

module.exports = serverHandlerRouter;