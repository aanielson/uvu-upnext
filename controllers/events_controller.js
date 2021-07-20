var express = require("express");

var router = express.Router();
var event = require("../models/event");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/events");
});

router.get("/events", function(req, res) {
  // express callback response by calling event.selectAllEvents
  event.all(function(data) {
    // Wrapping the array of returned events in a object so it can be referenced inside our handlebars
    var hbsObject = { events: data };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/events/create", function(req, res) {
  // takes the request object using it as input for event.addEvent
  event.create(req.body.event_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/events/update/:id", function(req, res) {
  event.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.json("/");
  });
});

module.exports = router;
