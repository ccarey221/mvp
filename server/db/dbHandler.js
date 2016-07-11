var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'chill',
  host: 'localhost',
  database: 'lost'
})

connection.connect(function(err) {
  if (err) {
    console.log('Error connecting to DB', error)
    return;
  } 
  console.log('You successfully accessed the Database!')
})

exports.queries = {
  getData: function(searchTerm) {
    connection.query(
      'SELECT * FROM lostItem WHERE keyword LIKE ' + searchTerm,
      function (error, data) {
        if (error) {throw error};
        return data;
      }
    )
  }
}