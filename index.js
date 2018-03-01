var express = require("express");
var dateConverter = require("./utils/date-converter");
var app = express();
var port = process.env.PORT || 3000;

app.get("/:date", function (req, res) {
  res.json(dateConverter(req.params.date));
});

app.get("/", function(req, res) {
  res.send("HOME PAGE");
});

app.listen(port, function() {
  console.log("Server listening on port: " + port);
});