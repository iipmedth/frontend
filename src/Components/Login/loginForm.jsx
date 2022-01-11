import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authFail, setAuthFail] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    await login(email, password).then((authSuccess) => {
      if (authSuccess) {
        window.location.assign("/patients");
      } else {
        setAuthFail(true);
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

            {authFail ? (
              <div className="authForm__failed">
                <p>Incorrect username or password, please try again</p>
              </div>
            ) : null}

            <button type="submit">Sign in</button>

            <Link className="authForm__link" to="/register">
              Dont have an account? Click here to register
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
