import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCjCmcMkMEEKewuNqQN73blAcF3zxqRZco",
  authDomain: "unsent-project.firebaseapp.com",
  databaseURL: "https://unsent-project.firebaseio.com",
  projectId: "unsent-project",
  storageBucket: "unsent-project.appspot.com",
  messagingSenderId: "101049017764",
  appId: "1:101049017764:web:00f493b10c55738ae1cd31",
  measurementId: "G-ZPLC6MWLEJ"
};

firebase.initializeApp(config);
export const database = firebase.database();
export default firebase;
