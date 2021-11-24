import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
import { URL } from "../../GlobalStyles/variables/variables";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    await fetch(URL + "register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    setRedirect(true);
  };

  if (redirect) {
    //   return <Navigate to="/" />;
    window.location.reload();
  }
  return (
    <form onSubmit={submit}>
      <h1>
        <input
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Register</button>
      </h1>
    </form>
  );
};

export default RegisterForm;
