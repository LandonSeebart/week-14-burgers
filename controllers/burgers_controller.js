const express = require('express')
const router = express.Router();
const burger = require("../models/burger.js");

// On index page, display all burger information 
// Model expects burger object expects only a callback
// callback tells app what to do once all data is returned from DB
// or how to handle an error getting the data
router.get("/", function(req, res) {
  burger.all(function(data) {
    res.render("index", {burgers: data});
  });
});

// Take information from api/burger and make a new burger with it
// Model expects a burger object with a name and devoured data and a callback function
// Burger object data comes from the req object
// Callback function handles errors and redirects user to a new page once burger is created
router.post("/api/burger", function(req, res) {
  burger.create ({
    name: req.body.name,
  }, function(result) {
    res.json({ id: result.insertId });
  });
});


// router.put("/api/burger/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     name: req.body.name,
//     devoured: req.body.devoured
//   }, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
