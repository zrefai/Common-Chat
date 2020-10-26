import React, { useRef, useState }from "react";
import firebase from "firebase/app"
import "./Lobby.css"
import ChatForm from "../../components/ChatForm"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Message } from "../../components/ChatMessage"
import ChatBoard from "../../components/ChatBoard";

const Dashboard = () => {
  const ref = useRef();
  const firestore = firebase.firestore()
  const auth = firebase.auth()
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', 'desc').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, displayName} = auth.currentUser;

    await messagesRef.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      createdBy: displayName,
      uid,
    })

    setMessage('');
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <ChatBoard>
      {messages && messages.reverse().map(msg => <Message key={msg.id} message={msg} />)}
      <span ref={ref}></span>
    </ChatBoard>
    <ChatForm onSubmit={sendMessage}>
      <ChatForm.Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Say something" />
      <ChatForm.Button type="submit" disabled={!message}>Send</ChatForm.Button>
    </ChatForm>
  </>)
};

export default Dashboard;
