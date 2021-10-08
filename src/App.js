import React, { useState } from "react";
import SignUp from "./signup/socialmedia/SocialSIgnUp";
import "./App.css";
import SignUpEmail from "./signup/EmailAndPassword/SignUpEmail";

import initalizeAuthentication from "./Firebase/firebase.initalize";
import SignInEmail from "./signIn/SignInEmail";
initalizeAuthentication();

const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="container">
      {!isSignIn ? (
        <SignUpEmail setIsSignIn={setIsSignIn}></SignUpEmail>
      ) : (
        <SignInEmail setIsSignIn={setIsSignIn}></SignInEmail>
      )}
      <SignUp></SignUp>
    </div>
  );
};

export default App;
