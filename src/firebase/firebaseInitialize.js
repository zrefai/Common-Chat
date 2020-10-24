import Firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/auth";
import "firebase/database";

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
