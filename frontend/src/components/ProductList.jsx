import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };

  //   console.warn(products);

  const deleteProduct = async (id) => {
    // console.log(id);
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });

    result = await result.json();

    if (result) {
      alert("record is deleted");
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
            <Link to={"/update/"+item._id}>Update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
