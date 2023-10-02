import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompnay] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(param);

    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    // console.warn(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();

    // console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompnay(result.company);
  };

  const updateProduct = async () => {
    // console.log(name, price, category, company);

    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "Application/json",
      },
    });

    result = await result.json();

    if(result) {
      // console.log(result);
      navigate('/');
    }
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        className="inputBox"
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product name"
      />

      <input
        className="inputBox"
        type="text"
        name=""
        id=""
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter product price"
      />

      <input
        className="inputBox"
        type="text"
        name=""
        id=""
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter product category"
      />

      <input
        className="inputBox"
        type="text"
        name=""
        id=""
        value={company}
        onChange={(e) => setCompnay(e.target.value)}
        placeholder="Enter product company"
      />

      <button onClick={updateProduct} className="appButton">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
