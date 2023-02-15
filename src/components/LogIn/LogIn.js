import React from "react";
import useFirebase from "../../hooks/useFirebase";

const LogIn = () => {
  const { singInWithGoogle } = useFirebase();
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
        <button onClick={singInWithGoogle}>Google Sing In</button>
      </div>
    </div>
  );
};

export default LogIn;
