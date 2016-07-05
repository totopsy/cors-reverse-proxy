var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
 
app.all("/*", function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    apiProxy.web(req, res, {target: process.argv[3] || 'http://localhost:3002'});
});

app.listen(process.argv[2] || 8080);
