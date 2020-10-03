import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "../Buttons/Button";
import Header from "../Header/Header";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e, setFunc) => {
    setFunc(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <p className="header-text">Register</p>
        <Input
          kind="username"
          placeholder="Username"
          value={username}
          handler={handleInput}
          setState={setUsername}
        />
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
          <Button>Register</Button>
          <p className="action-text">
            Already have an account? <Link to="/signin">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
