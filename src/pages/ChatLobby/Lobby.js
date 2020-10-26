import React, {useEffect, useRef, useState }from "react";
import firebase from "firebase/app"
import "./Lobby.css"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Message } from "../../components/ChatMessage"

const Dashboard = () => {
  const dummy = useRef();
  const firestore = firebase.firestore()
  const auth = firebase.auth()
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', 'desc').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, displayName} = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      createdBy: displayName,
      uid,
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
  <>
    <main>
      {messages && messages.reverse().map(msg => <Message key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
    </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
      <button type="submit" disabled={!formValue}>Send</button>
    </form>
  </>)
};

export default Dashboard;
