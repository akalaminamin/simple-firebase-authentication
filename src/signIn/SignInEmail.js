import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import singInImg from "../Images/20944201.jpg";
import "./SignIn.css";
const SignInEmail = ({ setIsSignIn }) => {
  const auth = getAuth();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const [error, setError] = useState("");
  const handleSignInEvent = (e) => {
    const inputType = e.target.type;
    const inputValue = e.target.value;
    setuser({ ...user, [inputType]: inputValue });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };
  return (
    <div className="singup-container">
      <div className="left-side">
        <img className="singup-img" src={singInImg} alt="logo" />
      </div>
      <div className="right-side">
        <h2>Sign In!</h2>
        <form onSubmit={handleOnSubmit}>
          <div>
            <input
              className="input"
              type="email"
              placeholder="Your Email"
              onBlur={handleSignInEvent}
            />
          </div>
          <div>
            <input
              className="input"
              type="password"
              placeholder="Enter Password"
              onBlur={handleSignInEvent}
            />
          </div>
          <p className="error">{error}</p>
          <div>
            <input className="input submit-btn" type="submit" value="Sign In" />
          </div>
        </form>
        <h4>
          <small onClick={() => setIsSignIn(false)}>Sign Up</small>
        </h4>
      </div>
    </div>
  );
};

export default SignInEmail;
