var express = require("express");

var router = express.Router();
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/events");
});

router.get("/events", function(req, res) {
  // replace old function with sequelize function
  db.Event.findAll()
    // use promise method to pass the events...
    .then(function(dbEvent) {
      console.log(dbEvent);
      // into the main index, updating the page
      // var hbsObject = { event: dbEvent };
      // return res.render("index", hbsObject);
      return JSON.stringify(dbEvent);
    });
});

router.get("/events/:true", function(req, res) {
  // replace old function with sequelize function
  db.Event.findAll({
    where: {
      upcoming: req.params.true
    }
  })
    // use promise method to pass the events...
    .then(function(dbEvent) {
      console.log(dbEvent);
      // into the main index, updating the page
      var hbsObject = { event: dbEvent };
      return res.render("index", hbsObject);
    });
});

// post route -> back to index
router.post("/events/create", function(req, res) {
  // edited event create to add in a event_name
  db.Event.create({
    event_name: req.body.event_name
  })
    // pass the result of our call
    .then(function(dbEvent) {
      // log the result to our terminal/bash window
      console.log(dbEvent);
      // redirect
      res.redirect("/");
    });
});

module.exports = router;
