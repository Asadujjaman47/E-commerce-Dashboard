import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
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
          <Link to="/logout"> Logout</Link>
        </li>
      </ul>
    </div>
  );
}
