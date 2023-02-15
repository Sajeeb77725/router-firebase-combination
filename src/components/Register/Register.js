import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Register here.</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <br />
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
