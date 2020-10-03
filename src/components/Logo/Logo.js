import React from "react";
import "./Logo.css";

const Logo = ({ size }) => {
  return (
    <div style={{ fontSize: size }}>
      <p className="Common-Style">Common</p>
      <p className="Chat-Style">Chat</p>
    </div>
  );
};

export default Logo;
