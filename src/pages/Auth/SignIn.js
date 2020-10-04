import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../../context/firebaseContext";
import Button from "../../components/Buttons";
import Form from "../../components/Form";
import Header from "../../components/Header/Header";

const SignIn = () => {
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const isInvalid = password === "" || email === "";

  const handleInput = (e, setFunc) => {
    setFunc(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // push to page
        history.push("/");
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <div>
      <Header />
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
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
            <Button.Auth disabled={isInvalid}>Sign In</Button.Auth>
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
