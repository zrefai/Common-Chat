import "firebase/auth";
import "firebase/firestore";
import * as firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyBbuh_YHgKD2tWrjN-IN-QtzrmLqm1XHBk",
  authDomain: "common-chat-31864.firebaseapp.com",
  databaseURL: "https://common-chat-31864.firebaseio.com",
  projectId: "common-chat-31864",
  storageBucket: "common-chat-31864.appspot.com",
  messagingSenderId: "1044717788977",
  appId: "1:1044717788977:web:d27d6b03a13c9b583a5a10",
  measurementId: "G-9VVTLBZQP0",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
