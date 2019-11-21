const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const URI =
  "mongodb+srv://Kickstarter:kickstarter@cluster0-pucsw.mongodb.net/maindb?retryWrites=true&w=majority";

const projectSchema = Schema({
  projectId: {
    type: Number,
    required: true,
    unique: true
  },
  projectName: {
    type: String
    // required: true
  },
  projectTeazer: {
    type: String
  },
  owner: {
    type: String
  },
  rate: {
    type: Number
  },
  currentFund: {
    type: Number
  },
  goalFund: {
    type: String
  },
  numberOfBackers: {
    type: Number
  },
  daysToGO: {
    type: Number
  },
  BackersIds: {
    type: Number
  },
  projectImg: {
    type: String
  },
  majorDescriptionImg: {
    type: String
  },
  majorDescription: {
    type: String
  },
  minorDescriptionImg: {
    type: String
  },
  minorDescription: {
    type: String
  }
});

//Project Model
const Project = mongoose.model("articles", projectSchema);

// Connect to database
mongoose.connect(URI, { useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("We are Connected :Taz");
});

// populat data to database.
const saveProjects = function(data) {
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    var projectId = data[i].projectId;
    var projectName = data[i].projectName;
    var projectTeazer = data[i].projectTeazer;
    var currentFund = data[i].currentFund;
    var goalFund = data[i].goalFund;
    var numberOfBackers = data[i].numberOfBackers;
    var daysToGO = data[i].daysToGO;
    var BackersIds = data[i].BackersIds;
    var projectImg = data[i].projectImg;
    var majorDescriptionImg = data[i].majorDescriptionImg;
    var majorDescription = data[i].majorDescription;
    var minorDescriptionImg = data[i].minorDescriptionImg;
    var minorDescription = data[i].minorDescription;
    var newProject = new Project({
      projectId: projectId,
      projectName: projectName,
      projectTeazer: projectTeazer,
      currentFund: currentFund,
      goalFund: goalFund,
      numberOfBackers: numberOfBackers,
      daysToGO: daysToGO,
      BackersIds: BackersIds,
      projectImg: projectImg,
      majorDescriptionImg: majorDescriptionImg,
      majorDescription: majorDescription,
      minorDescriptionImg: minorDescriptionImg,
      minorDescription: minorDescription
    });
    newProject
      .save()
      .then(data => console.log("Saved successfully"))
      .catch(err => console.log(err));
  }
};

module.exports.Project = Project;
module.exports.saveProjects = saveProjects;
