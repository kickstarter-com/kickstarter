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

var itemSchema = mongoose.Schema({
  id: { type: Number, trim: true, unique: true },
  title: { type: String, trim: true, unique: true },
  subtitle: { type: String, trim: true, unique: true },
  owner: { type: String, trim: true, unique: true },
  rate: { type: Number, trim: true, unique: true },
  img: { type: String, trim: true, unique: true }
});

var Item = mongoose.model("Item", itemSchema);

let save = () => {
  for (var i = 0; i < 100; i++) {
    var id = i;
    var title = faker.lorem.sentence();
    var subtitle = faker.lorem.sentence();
    var owner = faker.name.findName();
    var rate = faker.random.number({
      min: 1,
      max: 100
    });
    var img = faker.image.technics();
    var topic = new Item({
      id: id,
      title: title,
      subtitle: subtitle,
      owner: owner,
      rate: rate,
      img: img
    });
    // topic.save();
  }
};
save();
module.exports.save = save;
module.exports.Item = Item;
