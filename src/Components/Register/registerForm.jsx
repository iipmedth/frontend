import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { TEST_URL } from "../../GlobalStyles/variables/variables";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    await fetch(TEST_URL + "register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div className="authContainer">
      <div className="authForm">
        <form onSubmit={submit}>
          <h2 className="authForm__heading">Register</h2>
          <label className="authForm__label">Name</label>
          <input
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label className="authForm__label">Email</label>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="authForm__label">Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
