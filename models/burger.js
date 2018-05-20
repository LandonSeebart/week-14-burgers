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

  create: function(burger, callback) {
    orm.create(burger, function(res) {
      callback(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
