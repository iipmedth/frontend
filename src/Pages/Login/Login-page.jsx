import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import LoginForm from "../../Components/Login/loginForm";
import Registerform from "../../Components/Register/registerForm";

import { URL } from "../../GlobalStyles/variables/variables";
const Login = () => {
  return (
    <Fragment>
      <LoginForm />
      {/* <Registerform /> */}
    </Fragment>
  );
};

export default Login;
