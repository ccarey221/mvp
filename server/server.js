var mongoose = require('mongoose');
var app = require('express');
var http = require('http')
var requestHandler = require('requestHandler');

var port = 8000;
var ip = '127.0.0.1';

var server = http.createServer(requestHandler);
server.listen(ip, port);

app.get('/', function(req, res) {

})