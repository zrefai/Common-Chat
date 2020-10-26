import styled from "styled-components/macro";

export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const SentContainer = styled.div`
    flex-direction: column;
    color: white;
    align-self: flex-end;
    border-radius: 25px;
    background: #4384ff;
`
export const RecievedContainer = styled.div`
    flex-direction: column;
    color: white;
    border-radius: 25px;
    background: #b328d7;
`

export const MessageText = styled.p`
    font-size: 1.25rem;
    max-width: 400px;
    line-height: 20px;
    position: relative;
    color: white;
    padding-left: 12px;
    padding-right: 12px;
    text-align: justify;
    font-weight: bold;
`