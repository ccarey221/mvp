var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'chill',
  host: 'localhost',
  database: 'lost'
})

connection.connect(function(error) {
  if (error) {
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
  },

  newItem: function(itemObj) {
    connection.query(
      'INSERT INTO lostItem (keyword, description, reward) VALUES (' + itemObj.keyword + ',' + itemObj.description + ',' + itemObj.reward + ')',
      function(error) {
        if (error) { throw error; }
      }
    )
  },

  getUserItems: function(user) {
    connection.query(
      'SELECT * FROM lostItem INNER JOIN user ON ' + user + '.username = user.username AND user.id = lostItem.user_id',
      function(error, data) {
        if (error) { throw error; }
        return data;
      }
    )
  } 
}