import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as firebase from "firebase";
import firebaseConfig from './components/Firebase/index'


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


//Just for testing purpose
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
