var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.send("HOME PAGE");
});

app.listen(port, function() {
  console.log("Server listening on port: " + port);
});