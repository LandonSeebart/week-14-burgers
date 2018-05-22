const orm = require("../config/orm.js");

// We are creating a burger object and methods that our controller file can call
// when users navigate to specific urls 
const burger = {

  // All is a function that takes 1 argument
  // We expect the argument to be a call back function telling the app what to do
  // once the requested server side action is complete.
  // All takes this function and then calls it with response data
  all: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },

  // Create takes two arguments: a burger object and a callback function
  // The orm expects to receive values for burger_name.  This is passed through
  // with the object.  We also call the callback function received from the controller with the 
  // argument res so that the controller function can deal with whatever burger_db sends back.
  create: function(burger, callback) {
    orm.create(burger, function(res) {
      callback(res);
    });
  },

  update: function(burger, condition, callback) {
    orm.updateOne(burger, condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
