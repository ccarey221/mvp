var express = require('express');
var http = require('http')
var requestHandler = require('./db/dbHandler.js');
var bodyParser = require('body-parser')


var app = express();

var port = 3000;
var ip = '127.0.0.1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static(__dirname + '/../client'));

app.set('port', port)
app.set('ip', ip)

app.get('/', function(req, res) {
  console.log('found page')
})

app.get('/found', function(req, res) {
  console.log('get request!!!!!!!!!!!!!!!')
  var data = requestHandler.queries.populateTable();
  setTimeout(function() {

  console.log(data)
  res.statusCode = 200;
  res.send(data);
  }, 1000);
      
})

app.post('/addItem', function(req, res) {
  console.log('inside post!', req)
  requestHandler.queries.newItem(req.body); 
})

app.listen(port, ip, function() {
  console.log('Listening on Port 3000')
})

module.exports = app;