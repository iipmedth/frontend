import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await login(email, password).then((authSuccess) => {
      if (authSuccess) {
        console.log("login successfull");
      }
    });
  };

  return (
    <>
      <div className="authContainer">
        <div className="authForm">
          <form onSubmit={submit}>
            <h2 className="authForm__heading">Login </h2>

            <label className="authForm__label" htmlFor="">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="authForm__label" htmlFor="">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
