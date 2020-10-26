import React from "react"
import {Container} from "./styles/chatboard"

export default function ChatBoard({children, ...otherProps}) {
    return <Container {...otherProps}>{children}</Container>
}