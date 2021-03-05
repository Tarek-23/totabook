import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0fhOjxeB3oY0NCZwAlYYeH2jpjeiWbO8",
  authDomain: "tota-book.firebaseapp.com",
  projectId: "tota-book",
  storageBucket: "tota-book.appspot.com",
  messagingSenderId: "516044813590",
  appId: "1:516044813590:web:35226c29c9f5a1d3f48c37",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
