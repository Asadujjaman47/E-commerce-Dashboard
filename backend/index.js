const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");

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

// SIGN UP route
app.post("/register", async (req, res) => {
  // res.send("api in progress...");

  let user = new User(req.body);
  let result = await user.save();

  result = result.toObject();
  delete result.password;
  res.send(result);
});

// LOG IN
app.post("/login", async (req, res) => {
  console.log(req.body);

  let user = await User.findOne(req.body).select("-password");
  if (req.body.password && req.body.email) {
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No User Found" });
    }
  } else {
    res.send({ result: "No User Found" });
  }
});

// ADD PRODUCT
app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();

  res.send(result);
});

// GET ALL PRODUCT
app.get("/products", async (req, res) => {
  let products = await Product.find();

  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "No Products found" });
  }
});

// DELETE PRODUCT
app.delete("/product/:id", async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });

  res.send(result);
});

// GET SINGLE PRODUCT BY ID
app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Products found" });
  }
});

// UPDATE PRODUCT
app.put("/product/:id", async(req, res) => {
  let result = await Product.updateOne(
    {
      _id: req.params.id
    },
    {
      $set : req.body
    }
  )

  res.send(result);
});

app.listen(5000);
