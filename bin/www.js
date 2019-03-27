const http = require('http');
const querystring = require('querystring');
const serverHandle = require('../app')
const PORT = 8000;

const server = http.createServer(serverHandle)

server.listen(8000, ()=> {
    console.log("server is ok")
})