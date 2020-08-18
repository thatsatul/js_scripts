// npm run libuv-threads
var express = require('express');
var app = express();

var server = app.listen(3000, function(){
    console.log('LIBUV Threads: ', process.env.UV_THREADPOOL_SIZE); // this returns 'undefined'
});