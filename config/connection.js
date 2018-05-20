const mysql = require('mysql');
const db_password = require("../server.js")

console.log(db_password)
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'Root',
  password : '6TacoMoose!',
  database : 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;