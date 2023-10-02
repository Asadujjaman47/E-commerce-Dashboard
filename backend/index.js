const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
require("./db/config");
const User = require("./db/User");

const app = express();

// mongodb connection
// mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

// app.get("/", (req, res) => {
//     res.send("app is working...");
// })

// mongo test
// const connectDB = async() => {
//     mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

//     // model
//     const productSchema = new mongoose.Schema({});

//     // model(collection , Schema)
//     const product = mongoose.model('product', productSchema);

//     // find product
//     const data = await product.find();

//     console.log(data);
// }

// connectDB();
// ----------------------------------------------------------------------

// convert json
app.use(express.json());

// use cors
app.use(cors());

// create route
app.post("/register", async (req, res) => {
  // res.send("api in progress...");

  let user = new User(req.body);
  let result = await user.save();

  res.send(req.body);
});

app.listen(5000);
