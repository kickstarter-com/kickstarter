var mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
var faker = require("faker");

const URI = require("../config/keys.js").mongoURI;
mongoose.connect(URI, { userNewUrlParser: true }, { useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
});

var articleSchema = mongoose.Schema({
  projectId: { type: Number, trim: true, unique: true },
  projectName: { type: String, trim: true, unique: true },
  projectTeazer: { type: String, trim: true, unique: true },
  owner: { type: String, trim: true, unique: true },
  rate: { type: Number, trim: true },
  currentFund: { type: Number, trim: true },
  goalFund: { type: String, trim: true },
  numberOfBackers: { type: Number, trim: true },
  daysToGO: { type: Number, trim: true },
  BackersIds: { type: Number, trim: true, unique: true },
  projectImg: { type: String, trim: true },
  majorDescriptionImg: { type: String, trim: true },
  majorDescription: { type: String, trim: true },
  minorDescriptionImg: { type: String, trim: true },
  minorDescription: { type: String, trim: true }
});

let Article = mongoose.model("Article", articleSchema);

let add = () => {
  for (var i = 0; i < 101; i++) {
    var projectId = i;
    var projectName = faker.lorem.sentence();
    var projectTeazer = faker.lorem.sentence();
    var owner = faker.name.findName();
    var rate = faker.random.number({
      min: 1,
      max: 100
    });
    var currentFund = faker.random.number({
      min: 100
    });
    var goalFund = faker.random.number({
      min: 100
    });
    var numberOfBackers = faker.random.number({
      max: 300
    });
    var daysToGO = faker.random.number({
      max: 600
    });
    var BackersIds = faker.random.number();
    var projectImg = faker.image.technics();
    var majorDescriptionImg = faker.image.technics();
    var majorDescription = faker.lorem.paragraph();
    var minorDescriptionImg = faker.image.technics();
    var minorDescription = faker.lorem.paragraph();

    var topic = new Article({
      projectId: projectId,
      projectName: projectName,
      projectTeazer: projectTeazer,
      owner: owner,
      rate: rate,
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
  }
};
add();
module.exports.Article = Article;
module.exports.add = add;
