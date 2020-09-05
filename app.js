var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res, next) {
  res.send({ title: "Express", envVal: process.env.TESTVAL });
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
