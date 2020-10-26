import React from "react"
import {
    Container,
    Input,
    Button
} from "./styles/chatform"

export default function ChatForm({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

ChatForm.Input = function ChatInput({ children, ...otherProps }) {
    return <Input {...otherProps}>{children}</Input>
}

ChatForm.Button = function ChatButton({children, ...otherProps}) {
    return <Button {...otherProps}>{children}</Button>
}