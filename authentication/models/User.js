const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// DB Config
const URI = require("../config/keys.js").mongoURI;

//connect to mongoDB
mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log(" successfully connected to MongoDB"))
  .catch(err => console.log(err));

// Create Schema
const UserSchema = Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("users", UserSchema);
module.exports.User = User;
