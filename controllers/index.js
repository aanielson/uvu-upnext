var db = require("../models");
var Event, upNext;

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Event.findAll().then(function (data) {
      Event = data;

      db.upNext.findAll().then(function (data) {
        upNext = data;

        res.render("index", { Event, upNext});
      })
    });
  });
};