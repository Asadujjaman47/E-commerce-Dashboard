import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    // console.warn("apple");
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
        alt="logo"
        className="logo"
      />
      {auth ? (
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
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup"> Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
