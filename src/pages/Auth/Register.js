import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../../context/firebaseContext";
import Button from "../../components/Buttons";
import Form from "../../components/Form";
import Header from "../../components/Header/Header";

const Register = () => {
  const { firebase } = useContext(FirebaseContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const isInvalid = password === "" || email === "" || username === "";

  const handleInput = (e, setFunc) => {
    setFunc(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username });
      })
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        setUsername("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <div>
      <Header />
      <Form>
        <Form.Title>Register</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
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
            <Button.Auth disabled={isInvalid}>Register</Button.Auth>
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
