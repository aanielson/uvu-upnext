var express = require("express");

var router = express.Router();
var db = require("../models/");

// get route, edited to match sequelize
router.get("/upNext", function(req, res) {
  // replace old function with sequelize function
  db.upNext.findAll()
    // use promise method to pass the UpNext...
    .then(function(dbUpNext) {
      console.log(dbUpNext);
      // into the main index, updating the page
      var hbsObject = { UpNext: dbUpNext };
      return res.render("index", hbsObject);
      // return JSON.stringify(dbUpNext);
    });
});

module.exports = router;
