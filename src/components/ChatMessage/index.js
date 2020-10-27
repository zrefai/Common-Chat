import React from "react"
import { 
    Container, 
    SentContainer, 
    RecievedContainer, 
    MessageText,
    OtherText
} from "./styles/message"
import firebase from "firebase/app"

export function ChatMessage({children, ...otherProps}) {
    return <Container {...otherProps}>{children}</Container>
}

ChatMessage.Sent = function ChatMessageSent({children, ...otherProps}) {
    return <SentContainer {...otherProps}>{children}</SentContainer>
}

ChatMessage.Recieved = function ChatMessageRecieved({children, ...otherProps}) {
    return <RecievedContainer {...otherProps}>{children}</RecievedContainer>
}

ChatMessage.Text = function ChatMessageText({children, ...otherProps}) {
    return <MessageText {...otherProps}>{children}</MessageText>
}

ChatMessage.InfoS = function ChatOtherText({children, ...otherProps}) {
    return <OtherText style={{textAlign: 'end'}} {...otherProps}>{children}</OtherText>
}

ChatMessage.InfoR = function ChatOtherText({children, ...otherProps}) {
    return <OtherText style={{textAlign: 'start'}} {...otherProps}>{children}</OtherText>
}

export function Message(props) {
    const { text, uid, createdBy} = props.message;
    const auth = firebase.auth()

    const renderMessage = () => {
        if (uid === auth.currentUser.uid) return (
            <ChatMessage style={{flexDirection: 'row-reverse'}}>
                <div style={{flexDirection: 'column'}}>
                    <ChatMessage.Sent>
                        <ChatMessage.Text>{text}</ChatMessage.Text>
                    </ChatMessage.Sent>
                    <ChatMessage.InfoS>{createdBy}</ChatMessage.InfoS>
                </div>
            </ChatMessage>)
        return (
            <ChatMessage>
                <div style={{flexDirection: 'column'}}>
                    <ChatMessage.Recieved>
                        <ChatMessage.Text>{text}</ChatMessage.Text>
                    </ChatMessage.Recieved>
                    <ChatMessage.InfoR>{createdBy}</ChatMessage.InfoR>
                </div>
            </ChatMessage>
        )
    }

    return (renderMessage())
  }

