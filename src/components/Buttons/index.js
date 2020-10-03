import React from "react";
import { Container } from "./styles/Container";
import { WelcomeAuthButton, AuthButton } from "./styles/AuthButton";

export default function Button({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Button.WelcomeAuth = function ButtonWelcomeAuth({ children, ...otherProps }) {
  return <WelcomeAuthButton {...otherProps}>{children}</WelcomeAuthButton>;
};

Button.Auth = function ButtonAuth({ children, ...otherProps }) {
  return <AuthButton {...otherProps}>{children}</AuthButton>;
};
