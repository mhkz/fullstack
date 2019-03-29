const env = process.env.NODE_ENV

let MYSQL_CONF

if (env == 'dev') {
    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'guofeng2019',
        database:'myblog'
    }
}

if(env == 'pro') {
    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'guofeng2019',
        database:'myblog'
    }
}

// console.log('MYSQL_CONF', MYSQL_CONF)

module.exports = {
    MYSQL_CONF
}