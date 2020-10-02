import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e, setFunc) => {
    setFunc(e.target.value);
  };

  const handleLogIn = (e) => {
    console.log(email, password);
  };

  return (
    <div>
      <h1> Welcome to Common Chat</h1>
      <p>A web messaging app created by Zaki Refai</p>
      <p>Login to access your account</p>
      <form className="" onSubmit={(e) => handleLogIn(e)}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => handleInput(e, setEmail)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={(e) => handleInput(e, setPassword)}
        />
        <button>Log in</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
