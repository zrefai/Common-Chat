import React from "react";
import { Container } from "./styles/Container"

export default function PageContainer({children, ...otherProps}) {
    return <Container {...otherProps}>{children}</Container>
}