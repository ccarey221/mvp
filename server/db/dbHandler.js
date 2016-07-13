var mysql = require('mysql');
var Promise = require('bluebird');

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
  populateTable: function() {
    return new Promise(function(reject, resolve) { 
      connection.query(
        'SELECT * FROM lostItem',
        function (error, data) {
          if (error) {reject(error)};
          resolve(data);
        }
      )
    }).then(function(data) {
      return data;
    })
  },

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
      'INSERT INTO lostItem (keyword, description, reward, location) VALUES (' + "'" + itemObj.name + "'" + ',' + "'" + itemObj.description + "'" + ',' + itemObj.reward + ',' + "'" +itemObj.location + "'" + ')',
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
  },

  checkPassword: function(username) {
    connection.query(
      'SELECT password FROM user WHERE username = ' + username,
      function (error, data) {
        if (error) {throw error};
        return data;
      }
    )
  },

  createUser: function(userObj) {
    connection.query(
      'INSERT INTO user (username, name, password, email) VALUES (' + userObj.username + ',' + userObj.name + ',' + userObj.password + ',' + userObj.email + ')',
      function (error) {
        if (error) {throw error};
      }
    )
  } 
}