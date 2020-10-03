import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Button from "../Buttons/Button";
import Input from "./Input";
import "./Auth.css";

const SignIn = () => {
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
      <Header />
      <div className="form-container">
        <p className="header-text">Sign In</p>
        <Input
          kind="email"
          placeholder="Email"
          value={email}
          handler={handleInput}
          setState={setEmail}
        />
        <Input
          kind="password"
          placeholder="Password"
          value={password}
          handler={handleInput}
          setState={setPassword}
        />
        <div className="action-button-container">
          <Button>Sign In</Button>
          <p className="action-text">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
