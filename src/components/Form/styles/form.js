import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: #4384ff;
`;

export const Error = styled.div`
  background: red;
  font-size: 15px;
  font-weight: bold;
  border-radius: 30px;
  color: white;
  min-width: 300px;
  max-width: 300px;
  margin-bottom: 15px;
  padding: 10px;
  justify-content: center;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  font-size: 15px;
  padding: 15px 15px 15px 25px;
  width: 300px;
  justify-content: center;
  border-radius: 30px;
  border-color: black;
  border-width: 2px;
  outline: none;

  &::placeholder {
    font-style: italic;
  }
`;

export const ActionContainer = styled.div`
  margin-top: 7px;
`;

export const ActionText = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

export const Link = styled(RouterLink)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
