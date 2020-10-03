import React from "react";
import "./Auth.css";

const Input = ({ kind, placeholder, value, handler, setState }) => {
  return (
    <input
      className="input"
      type={kind}
      name={kind}
      id={kind}
      autoComplete="off"
      placeholder={placeholder}
      value={value}
      onChange={(e) => handler(e, setState)}
    />
  );
};

export default Input;
