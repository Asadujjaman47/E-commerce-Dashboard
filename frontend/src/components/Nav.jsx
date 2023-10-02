import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const auth = localStorage.getItem("user");

  return (
    <div>
      <ul className="nav-ul">
        {/* <li>Home Page</li> */}
        {/* <li>
          <Link to="/">Homepage</Link>
        </li> */}

        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update"> Update Products</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          {auth ? (
            <Link to="/logout"> Logout</Link>
          ) : (
            <Link to="/signup"> Sign Up</Link>
          )}
        </li>
      </ul>
    </div>
  );
}
