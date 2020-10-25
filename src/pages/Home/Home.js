import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Buttons";
import Bubbles from "../../components/BubbleAnim/Bubbles";

const Home = () => {
  const history = useHistory();

  const navigate = (route) => {
    history.push(route);
  };

  return (
    <>
      <Bubbles/>
      <div className="Home">
        <div className="Welcome-To">Welcome to</div>
        <Logo size={65} />
        <div className="By-Zaki">A web chat app created by Zaki Refai</div>
        <div className="button-container">
          <Button.WelcomeAuth onClick={() => navigate("/signin")}>
            Sign In
          </Button.WelcomeAuth>
          <Button.WelcomeAuth onClick={() => navigate("/register")}>
            Register
          </Button.WelcomeAuth>
        </div>
      </div>
    </>
  );
};

export default Home;
