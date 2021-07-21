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
      var hbsObject = { event: dbEvent };
      return res.render("index", hbsObject);
      // return JSON.stringify(dbEvent);
    });
});

module.exports = router;
