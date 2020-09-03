var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", envVal: process.env.TESTVAL });
});

module.exports = router;
