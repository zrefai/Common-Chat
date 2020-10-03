import React from "react";
import "./Button.css";

const Button = ({ children, onFunc }) => {
  return (
    <button className="button" onClick={onFunc}>
      {children}
    </button>
  );
};

export default Button;
