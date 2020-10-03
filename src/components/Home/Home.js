import React from "react";
import "./Home.css";
import Logo from "../Logo/Logo";

const Home = () => {
  return (
    <div className="Home-Container">
      <div className="Welcome-To">Welcome to</div>
      <Logo size={65} />
      <div className="By-Zaki">A web chat app created by Zaki Refai</div>
      <div className="button-container">
        <button className="button">Sign In</button>
        <button className="button">Register</button>
      </div>
    </div>
  );
};

export default Home;