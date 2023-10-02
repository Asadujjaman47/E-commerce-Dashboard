const express = require('express');
const mongoose = require("mongoose");


const app = express();

// mongodb connection
// mongoose.connect("mongodb://127.0.0.1:27017/e-comm");


// app.get("/", (req, res) => {
//     res.send("app is working...");
// })

const connectDB = async() => {
    mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

    // model 
    const productSchema = new mongoose.Schema({});

    // model(collection , Schema)
    const product = mongoose.model('product', productSchema);
    
    // find product
    const data = await product.find();

    console.log(data);
}

connectDB();


app.listen(5000);