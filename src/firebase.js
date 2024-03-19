import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgo_bCkyXAZjmm-xSEzuu7hjWzU6dlawA",
  authDomain: "medcare-b2e1a.firebaseapp.com",
  projectId: "medcare-b2e1a",
  storageBucket: "medcare-b2e1a.appspot.com",
  messagingSenderId: "300540236215",
  appId: "1:300540236215:web:bdf555520aca79597f9832",
  measurementId: "G-588BJ2XSHL"
});

const auth = firebase.auth();

export {auth};
