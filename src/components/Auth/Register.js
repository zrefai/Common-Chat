import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e, setFunc) => {
    setFunc(e.target.value);
  };

  return (
    <div>
      <h1>Register</h1>
      <h2>Register for an account</h2>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          autoComplete="off"
          value={username}
          onChange={(e) => handleInput(e, setUsername)}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => handleInput(e, setEmail)}
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={(e) => handleInput(e, setPassword)}
        />
      </form>
    </div>
  );
};

export default Register;
