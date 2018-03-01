var express = require("express");
var dateConverter = require("./utils/date-converter");
var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "hbs");

app.get("/:date", function (req, res) {
  res.json(dateConverter(req.params.date));
});

app.get("/", function (req, res) {
  res.render("index", { url: req.get("host") });
});

app.listen(port, function() {
  console.log("Server listening on port: " + port);
});