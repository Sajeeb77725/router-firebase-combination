import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);

const LogIn = () => {
  const [singInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    singInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h3>Log in here.</h3>
      <form>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="Log In" />
      </form>
      <div style={{ margin: "80px" }}>
        <button onClick={handleGoogleSignIn}>Google Sing In</button>
      </div>
    </div>
  );
};

export default LogIn;
