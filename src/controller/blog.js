const {exec} = require('../db/mysql')
const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author=${author}`
    }
    if(keyword) {
        sql += `and title like '%${keyword}'`
    }
    sql +=`order by createtime desc`

    return exec(sql)
}

const getDetail = id => {
    return {
        id: 1,
        name: 'xxx',
        content: 'xxx',
        createTime: '',
        auth: 'zhang san',
    }
}

const newBlog = (blogData={}) => {
    // blogData 是一个博客对象， 包含 title content 属性
    console.log("新建博客-----", blogData)
    return {
        id: '3' // 
    }
}

const updateBlog = (id, blogData) => {
    console.log("删除博客", id, blogData)
    return true
}

const delBlog = id => {
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
     delBlog
}