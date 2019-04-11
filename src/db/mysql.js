const mysql = require('mysql');
const { MYSQL_CONF } = require('../conf/mysql');

const con = mysql.createConnection(MYSQL_CONF)

con.connect()

// 统一执行 sql 的函数
const exec = (sql) => {
    let promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec
}