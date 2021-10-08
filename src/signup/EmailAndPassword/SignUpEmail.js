import React, { useState } from "react";
import "./SignUpEmail.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import singInImg from "../../Images/20944201.jpg";
const SignUpEmail = ({ setIsSignIn }) => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
  })
  const {name, email, password} = user;
  const auth = getAuth();
  const handleSignUpEvent = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUser({...user, [inputName]:inputValue})
  };
  // Handle on submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regexEmail)) {
      setError("Please Enter valid Email");
      return;
    }
    const regexPassword =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!password.match(regexPassword)) {
      setError("Please Input strong Password");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      setError("");
    });
      console.log(user);
  };
  return (
    <>
      <div className="singup-container">
        <div className="left-side">
          <img className="singup-img" src={singInImg} alt="logo" />
        </div>
        <div className="right-side">
          <h2>Welcome!</h2>
          <form onSubmit={handleOnSubmit}>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Your Name"
                name='name'
                onBlur={handleSignUpEvent}
              />
            </div>
            <div>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your Email"
                onBlur={handleSignUpEvent}
              />
            </div>
            <div>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Create Password"
                onBlur={handleSignUpEvent}
              />
            </div>
            <div>
              <input
                className="input submit-btn"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="error">{error}</p>
          <h4>
            <small onClick={() => setIsSignIn(true)}>Sign In</small>
          </h4>
        </div>
      </div>
    </>
  );
};

export default SignUpEmail;
