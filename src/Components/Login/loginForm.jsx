import React, { useState, useEffect } from "react";

//Globals
import { URL, TEST_URL } from "../../GlobalStyles/variables/variables";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    console.log(TEST_URL + "login");
    e.preventDefault();
    const response = await fetch(TEST_URL + "login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
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
