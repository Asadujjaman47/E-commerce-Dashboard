import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log(email, password);
    }

  return (
    <div className="login">
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        onClick={handleLogin}
        className="appButton"
        type="button"
        value="Login"
      />
    </div>
  );
};

export default Login;
