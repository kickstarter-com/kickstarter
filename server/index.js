const express = require("express");
const bodyParser = require("body-parser");
const ProjectDB = require("./models/db.js");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.json());

app.get("/posts", function(req, res) {
  console.log("inside get req");
  ProjectDB.Project.find({})
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => console.log(err));

  // res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Listening to  http://localhost:${PORT} ...`)
);
