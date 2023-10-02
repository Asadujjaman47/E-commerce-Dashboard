import React, { useState } from "react";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompnay] = React.useState("");

  const updateProduct = async () => {
    console.log(name, price, category, company);
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
