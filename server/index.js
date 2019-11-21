const express = require("express");
const bodyParser = require("body-parser");
const ProjectDB = require("../database/db.js");
const path = require("path");
const app = express();
//app.use(express.static(path.join(__dirname, "../public")));

app.use(bodyParser.json());

app.get("/", function(req, res) {
  
  ProjectDB.Project.find({})
    .then(data => {
      //console.log(data);
      res.json(data);
    })
    .catch(err => console.log(err));
  
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Listening to  http://localhost:${PORT} ...`)
);