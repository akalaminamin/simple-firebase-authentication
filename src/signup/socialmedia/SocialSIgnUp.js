import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import "./SociasignUp.css";
const SignUp = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  // handle Google sign in
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const person = result.user;
      setUser(person);
      console.log(person);
    });
  };

  // handle facebook sign in
  const handlefacebookSingIn = () => {
    signInWithPopup(auth, FacebookProvider).then((result) => {
      const person = result.user;
      setUser(person);
    });
  };

  // handle github sign in
  const handleGithubSingIn = () => {
    signInWithPopup(auth, GithubProvider).then((result) => {
      const person = result.user;
      setUser(person);
    });
  };

  // Handle sing out
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  const {displayName } = user;
  return (
    <div className="social-signup">
      {!displayName ? (
        <div>
          {/* <span>Create account with </span> */}
          <button onClick={handleGoogleSingIn}>Sign in Google</button>
          <button onClick={handlefacebookSingIn}>Sign in Facebook</button>
          <button onClick={handleGithubSingIn}>Sign in Github</button>
        </div>
      ) : (
        <button onClick={handleSignOut}>Sign Out</button>
      )}
    </div>
  );
};

export default SignUp;
