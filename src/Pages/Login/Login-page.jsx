import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import LoginForm from "../../Components/Login/loginForm";
import Registerform from "../../Components/Register/registerForm";

import { URL } from "../../GlobalStyles/variables/variables";
const Login = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(URL + "user", {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const content = response;
        console.log("json", content);
      } catch (err) {
        console.error("err", err);
      }
    })();
  });

  useEffect(() => {
    console.log(name);
  });
  return (
    <Fragment>
      <LoginForm />
      <Registerform />
      <div>{name ? "HI" + name : "Not Authenticated"}</div>
    </Fragment>
  );
};

export default Login;
