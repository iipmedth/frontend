import React, { useState } from "react";

//Globals
import { URL } from "../../GlobalStyles/variables/variables";

//Styling
import "./loginForm.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await fetch(URL + "login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
  };
  return (
    <form onSubmit={submit}>
      <h1>
        <input
          type="email"
          placeholder="Email adress"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in</button>
      </h1>
    </form>
  );
};

export default LoginForm;
