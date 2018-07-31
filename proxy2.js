var portproxy = 8001;
var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverContac = 'http://localhost:8088';
var serverContac2 = 'http://my.server.com';

app.use(function(req, res, next) {
    console.log('server use', req.connection.remoteAddress + ' ' + req.url);
    next();
});

app.all("/forms2/", function(req, res) {
    console.log('redirect forms');
    apiProxy.web(req, res, { target: serverContac2 });
});

app.listen(portproxy);
console.log('Listen; ', portproxy);