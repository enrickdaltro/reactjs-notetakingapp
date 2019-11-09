import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import * as serviceWorker from "./serviceWorker";

// We wanna call require from Firebase
const firebase = require("firebase");
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnQgfqLEesWnXrIlQQVlRx_36DA2aQpK8",
  authDomain: "note-taking-app-69381.firebaseapp.com",
  databaseURL: "https://note-taking-app-69381.firebaseio.com",
  projectId: "note-taking-app-69381",
  storageBucket: "note-taking-app-69381.appspot.com",
  messagingSenderId: "629945282245",
  appId: "1:629945282245:web:bceefb8a75f45ea164caac",
  measurementId: "G-G2KCS3FNNB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
