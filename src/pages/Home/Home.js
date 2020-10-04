import React from "react";
import "./Home.css";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Buttons";

const Home = () => {
  return (
    <div className="Home-Container">
      <div className="Welcome-To">Welcome to</div>
      <Logo size={65} />
      <div className="By-Zaki">A web chat app created by Zaki Refai</div>
      <div className="button-container">
        <Button.WelcomeAuth>Sign In</Button.WelcomeAuth>
        <Button.WelcomeAuth>Register</Button.WelcomeAuth>
      </div>
    </div>
  );
};

export default Home;
