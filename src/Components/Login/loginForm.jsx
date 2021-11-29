import React, { useState, useEffect } from "react";
import axios from "axios";

//Globals
import { URL, TEST_URL } from "../../GlobalStyles/variables/variables";

//Styling
import "./loginForm.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState(false);

  const submit = async (e) => {
    console.log(TEST_URL + "login");
    e.preventDefault();
    const response = await fetch(TEST_URL + "login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const content = await response.json();
    setLogin(true);
    console.log(content);
  };

  // useEffect(() => {
  //   // if (login == true) {
  //   //   console.log("test");
  //   //   const response = async () => {
  //   //     await fetch(TEST_URL + "user", {
  //   //       headers: { "Content-Type": "application/json" },
  //   //       credentials: "include",
  //   //     });
  //   //     console.log(response);
  //   //     const content = await response.json();
  //   //     console.log(content.name);
  //   //     console.log("test");
  //   //   };
  //   // }
  // }, [login]);

  useEffect(() => {
    (async () => {
      const response = await fetch(TEST_URL + "user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      console.log(content);
    })();
  });

  return (
    <>
      <div className="authForm">
        <div className="row center-sm">
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
        </div>
      </div>
    </>
  );
};

export default LoginForm;
