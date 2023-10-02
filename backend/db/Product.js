const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String
});

// model(collection , Schema)
module.exports = mongoose.model("products", productSchema);
