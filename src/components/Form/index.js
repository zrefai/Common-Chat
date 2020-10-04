import React from "react";
import {
  Container,
  Title,
  Error,
  Base,
  Input,
  ActionContainer,
  ActionText,
  Link,
} from "./styles/form";

export default function Form({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Form.Title = function FormTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Form.Error = function FormError({ children, ...otherProps }) {
  return <Error {...otherProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...otherProps }) {
  return <Base {...otherProps}>{children}</Base>;
};

Form.Input = function FormInput({ children, ...otherProps }) {
  return <Input {...otherProps}>{children}</Input>;
};

Form.ActionContainer = function FormActionContainer({
  children,
  ...otherProps
}) {
  return <ActionContainer {...otherProps}>{children}</ActionContainer>;
};

Form.ActionText = function FormActionText({ children, ...otherProps }) {
  return <ActionText {...otherProps}>{children}</ActionText>;
};

Form.Link = function FormLink({ children, ...otherProps }) {
  return <Link {...otherProps}>{children}</Link>;
};
