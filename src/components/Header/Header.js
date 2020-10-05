import React, { useContext } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { FirebaseContext } from "../../context/firebaseContext";
import { ROUTES } from "../../helpers/constants";
import Logo from "../Logo/Logo";
import Button from "../Buttons";

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const location = useLocation();

  const handleLogOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  const renderLogOut = () => {
    if (location.pathname !== ROUTES.DASHBOARD) return null;
    return <Button.Auth onClick={(e) => handleLogOut(e)}>Log Out</Button.Auth>;
  };

  const renderLogo = () => {
    if (location.pathname === ROUTES.HOME) return null;
    return <Logo size={35} />;
  };

  const renderHeader = () => {
    if (location.pathname === ROUTES.HOME) return null;
    return (
      <div className="container">
        <div style={{ flex: 1 }} />
        <div style={{ flex: 2 }}>{renderLogo()}</div>
        <div style={{ flex: 1 }}>{renderLogOut()}</div>
      </div>
    );
  };

  return renderHeader();
};

export default Header;
