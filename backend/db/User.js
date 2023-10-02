const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

                    // model(collection , Schema)
module.exports = mongoose.model("users", userSchema);
