import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//
// // Import the functions you need from the SDKs you need
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // // https://firebase.google.com/docs/web/setup#available-libraries
// // var firebase = require('firebase');
// // var firebaseui = require('firebaseui');
// //
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCNdIXdRB6V4DRf3ZA6exZrw3VVsd8nVW4",
//     authDomain: "gcl-ui.firebaseapp.com",
//     projectId: "gcl-ui",
//     storageBucket: "gcl-ui.appspot.com",
//     messagingSenderId: "48064346062",
//     appId: "1:48064346062:web:23ccb60bbc9bbfaa3f1d9f",
//     measurementId: "G-GXLL9Y3KCW"
// };
//
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const provider = new GoogleAuthProvider();
//
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//
//
// const auth = getAuth();
// signInWithPopup(auth, provider)
//     .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//     }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
// });

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   // Other config options...
// });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
