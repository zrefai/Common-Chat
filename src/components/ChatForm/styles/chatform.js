import styled from "styled-components/macro";

export const Container = styled.form`
    flex-direction: row;
    margin-bottom: 20px;
`
export const Input = styled.input`
    font-size: 20px;
    padding: 10px 10px 10px 20px;
    margin-bottom: 5px;
    width: 400px;
    justify-content: center;
    border-radius: 30px;
    border-color: black;
    border-width: 2px;
    outline: none;

    &::placeholder {
        font-style: italic;
    }
`

export const Button = styled.button`
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    padding: 10px;
    color: #4384ff;
    border-radius: 30px;
    border-color: black;
    border-width: 2px;
    outline: none;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        background-color: #4384ff;
        color: white;
    }
`
