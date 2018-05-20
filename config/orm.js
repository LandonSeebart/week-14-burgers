
const connection = require("./connection.js");

const tableName = "burgers";

const orm = {

  selectALL: function(callback) {
    // Define query upfront to simplify connection code
    const querySting = "SELECT * FROM " + tableName;

    // Use imported connection object to connect to burgers_db query the entire table
    // The call back ensures data is returned only after the query is finished
    connection.query(queryString, function(err, result) {
      if (err) console.log(err);
      callback(result);
    });
  },

  // Create new burger and add to table
  create: function(burger, callback) {  
    const queryString = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,)"
    connection.query(queryString, [burger.name, burger.devoured], function(err, result) {
      if (err) console.log(err);
      callback(result);
    });
  },

  //Update burger name - ?how can I allow someone to update either name or state?
  updateOne: function(burger, callback) {
    const queryString = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";
    connection.query(queryString, [burger.name, burger.id], function(err, result) {
        if (err) console.log(err);
        callback(result)
    });
  },
}

module.exports = orm;
