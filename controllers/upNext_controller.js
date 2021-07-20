var express = require("express");

var router = express.Router();
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/UpNext");
});

// get route, edited to match sequelize
router.get("/UpNext", function(req, res) {
  // replace old function with sequelize function
  db.UpNext.findAll()
    // use promise method to pass the UpNext...
    .then(function(dbUpNext) {
      console.log(dbUpNext);
      // into the main index, updating the page
      var hbsObject = { UpNext: dbUpNext };
      return res.render("index", hbsObject);
    });
});

// post route to create UpNext
router.post("/UpNext/create", function(req, res) {
  // edited UpNext create to add in a UpNext_name
  db.UpNext.create({
    title: req.body.title
  })
    // pass the result of our call
    .then(function(dbUpNext) {
      // log the result to our terminal/bash window
      console.log(dbUpNext);
      // redirect
      res.redirect("/");
    });
});

module.exports = router;
