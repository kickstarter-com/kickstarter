var express = require("express");
var bodyParser = require("body-parser");
var faker = require("faker");
var items = require("../database-mongo").Item;

var app = express();

app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/items", function(req, res) {
  items
    .find({})
    .then(items => res.json(items))
    .catch(err => res.status(400).json("error", err));
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
