const connection = require("./connection.js");

const tableName = "burgers";

const orm = {

  selectAll: function(callback) {
    // Define query upfront to simplify connection code
    const queryString = "SELECT * FROM " + tableName;


    // Use imported connection object to connect to burgers_db query the entire table
    // The call back ensures data is returned only after the query is finished
    connection.query(queryString, function(err, result) {
      if (err) console.log(err);
      callback(result);
    });
  },

  // Create new burger and add to table
  create: function(burger, callback) {  
    const queryString = "INSERT INTO " + tableName + " (burger_name) VALUES (?)"
    connection.query(queryString, [burger.name], function(err, result) {
      if (err) console.log(err);
      callback(result);
    });
  },

  updateOne: function(burger, condition, callback) {
    console.log("ORM")
    console.log(burger, condition)
    const queryString = "UPDATE " + tableName + " SET devoured=? " + condition;
    
    connection.query(queryString, [burger.devoured], function(err, result) {
        if (err) console.log(err);
        callback(result)
    });
  },
 }

module.exports = orm;
