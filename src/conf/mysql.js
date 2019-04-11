const env = process.env.NODE_ENV

let MYSQL_CONF

if (env == 'dev') {
    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'123456',
        database:'blog'
    }
}

if(env == 'pro') {
    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'123456',
        database:'blog'
    }
}

// console.log('MYSQL_CONF', MYSQL_CONF)

module.exports = {
    MYSQL_CONF
}