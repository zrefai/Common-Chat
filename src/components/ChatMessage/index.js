import React from "react"
import { 
    MessageContainer, 
    SentContainer, 
    RecievedContainer, 
    MessageText
} from "./styles/message"
import firebase from "firebase/app"

export function ChatMessage({children, ...otherProps}) {
    return <MessageContainer {...otherProps}>{children}</MessageContainer>
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

export function Message(props) {
    const { text, uid } = props.message;
    const auth = firebase.auth()

    const renderMessage = () => {
        if (uid === auth.currentUser.uid) return (
            <ChatMessage style={{flexDirection: 'row-reverse'}}>
                <ChatMessage.Sent>
                    {/* <ChatMessage.Text style={{color: 'black'}}>{auth.currentUser.email}</ChatMessage.Text> */}
                    <ChatMessage.Text>{text}</ChatMessage.Text>
                </ChatMessage.Sent>
            </ChatMessage>)
        return (
            <ChatMessage>
                <ChatMessage.Recieved>
                    <ChatMessage.Text>{text}</ChatMessage.Text>
                </ChatMessage.Recieved>
            </ChatMessage>
        )
    }

    return (renderMessage())
  }

