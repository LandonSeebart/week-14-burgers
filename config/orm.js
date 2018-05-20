
const connection = require("./connection.js");

const orm = {
  selectALL: function(table) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) console.log(err);
      console.log(result);
    });
  },

  create: function(table, vals) {  
    const queryString = "INSERT INTO ?? (burger_name, devoured) VALUES ?"
    connection.query(queryString, [table, vals], function(err, result) {
      if (err) console.log(err);
      console.log(result);
    });
  },

  updateOne: function(table, vals, id) {
    const queryString = "UPDATE ?? SET burger_name = ?, devoured = ? WHERE ?";
    connection.query(queryString, [table, vals, id], function(err, result) {
        if (err) console.log(err);
        console.log(result)
    });
  };

module.exports = orm;
