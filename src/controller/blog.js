const getList = (auth, keyword) => {
    // 返回数据格式
    return [
        {
            id: 1,
            name: 'xxx',
            content: 'xxx',
            createTime: '',
            auth: 'zhang san',
        },
        {
            id: 2,
            name: 'xxx',
            content: 'xxx',
            createTime: '',
            auth: 'li si',
        }
    ]
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

module.exports = {
    getList,
    getDetail
}