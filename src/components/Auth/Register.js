import React, { useState } from "react";
import Button from "../Buttons";
import Form from "../Form";
import Header from "../Header/Header";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e, setFunc) => {
    setFunc(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username, email, password);
  };

  return (
    <div>
      <Header />
      <Form>
        <Form.Title>Register</Form.Title>
        <Form.Base onSubmit={handleRegister}>
          <Form.Input
            type="username"
            name="username"
            id="username"
            autoComplete="off"
            placeholder="Username"
            value={username}
            onChange={(e) => handleInput(e, setUsername)}
          />
          <Form.Input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInput(e, setEmail)}
          />
          <Form.Input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
            value={password}
            onChange={(e) => handleInput(e, setPassword)}
          />
          <Form.ActionContainer>
            <Button.Auth>Register</Button.Auth>
            <Form.ActionText>
              Have an account? You can sign in{" "}
              <Form.Link to="/signin">here</Form.Link>
            </Form.ActionText>
          </Form.ActionContainer>
        </Form.Base>
      </Form>
    </div>
  );
};

export default Register;
