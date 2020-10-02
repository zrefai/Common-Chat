import "firebase/auth";
import "firebase/firestore";
import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
