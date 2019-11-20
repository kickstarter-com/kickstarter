var express = require("express");
var bodyParser = require("body-parser");
var topics = require("../database-mongo").Item;

var app = express();

app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/articles", function(req, res) {
  article
    .find({})
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json("error", err));
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
