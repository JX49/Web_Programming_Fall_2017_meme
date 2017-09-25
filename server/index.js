const http = require("http");
const _ = require("lodash");

const server = http.createServer(function(req, res){
   const path = req.url;
    res.write("hello world. you requested" + path);
    res.end();
    });
    const $PORT = 8080;
    server.listen($PORT);