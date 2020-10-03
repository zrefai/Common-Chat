import React, { useState } from "react";
import Header from "../Header/Header";
import Button from "../Buttons";
import Form from "../Form";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e, setFunc) => {
    setFunc(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <Header />
      <Form>
        <Form.Title>Sign In</Form.Title>
        <Form.Base onSubmit={handleSignIn}>
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
            <Button.Auth>Sign In</Button.Auth>
            <Form.ActionText>
              Don't have an account? You can register{" "}
              <Form.Link to="/register">here</Form.Link>
            </Form.ActionText>
          </Form.ActionContainer>
        </Form.Base>
      </Form>
    </div>
  );
};

export default SignIn;
