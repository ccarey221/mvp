var express = require('express');
var http = require('http')
var requestHandler = require('./db/dbHandler.js');

var app = express();

var port = 3000;
var ip = '127.0.0.1';

app.use('/app', express.static(__dirname + '../app'));

app.set('port', port)
app.set('ip', ip)

app.get('/', function(req, res) {
  
})

app.listen(port, ip, function() {
  console.log('Listening on Port 3000')
})