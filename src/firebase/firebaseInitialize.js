import Firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/firestore";
import "firebase/auth";

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
