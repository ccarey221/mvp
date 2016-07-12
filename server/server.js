var express = require('express');
var http = require('http')
var requestHandler = require('./db/dbHandler.js');

var app = express();

var port = 3000;
var ip = '127.0.0.1';

app.use(express.static(__dirname + '/../client'));

app.set('port', port)
app.set('ip', ip)

app.get('/', function(req, res) {
  console.log('found page')
})

app.get(__dirname + '/../client/test.json', function(req, res) {
})

app.post(__dirname + '/../client/test.json', function(req, res) {
  requestHandler.newItem(req.data);
  
})

app.listen(port, ip, function() {
  console.log('Listening on Port 3000')
})

module.exports = app;