
import firebase from "firebase/app";
import "firebase/firestore"

// Initialize Firebase
const app = firebase.initializeApp(
  {
    apiKey: "AIzaSyASG1RufByVvCKhuDIweaA2JxgCNbvbWLM",
    authDomain: "todo-app-8619d.firebaseapp.com",
    projectId: "todo-app-8619d",
    storageBucket: "todo-app-8619d.appspot.com",
    messagingSenderId: "71395246396",
    appId: "1:71395246396:web:cb54fd9a6f787218309e39"
});

export default app