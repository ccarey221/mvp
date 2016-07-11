var mongoose = require('mongoose');
var express = require('express');
var http = require('http')
var requestHandler = require('requestHandler');

var app = express();

var port = 3000;
var ip = '127.0.0.1';

app.set('port', port)
app.set('ip', ip)

var server = http.createServer(requestHandler);
server.listen(ip, port);

app.get('/', function(req, res) {

})