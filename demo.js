var express = require('./lib/express');

var app = express();

require('http').createServer(function(req,res){
    console.log(res)
}).listen(3000)