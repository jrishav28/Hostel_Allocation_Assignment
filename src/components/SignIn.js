import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { Redirect, useHistory } from "react-router-dom";
import Home from "./Home";

var config = {
  apiKey: "AIzaSyAnVojTEVDLcfObPfkdmk_DOzCIhvwa80I",
  authDomain: "hostel-booking-app-99367.firebaseapp.com",
  projectId: "hostel-booking-app-99367",
  storageBucket: "hostel-booking-app-99367.appspot.com",
  messagingSenderId: "235959282771",
  appId: "1:235959282771:web:0371b6118d381426e66aa6",
  measurementId: "G-63PD8L3LXK",
};

firebase.initializeApp(config);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  signInSuccessUrl: "/signed",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

function SignIn({ history }) {
  history = useHistory();
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  if (isSignedIn) {
    const user = localStorage.getItem("user");
    if (!user) {
      const userName = {
        name: firebase.auth().currentUser.displayName,
      };
      localStorage.setItem("user", JSON.stringify(userName));
    }
    history.push("/signed");
  }

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="signin">
      <h1>Hostel Allocation</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignIn;
