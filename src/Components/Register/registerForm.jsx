import React from "react";
// ibrary's
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Imported Variables
import { URL } from "../../GlobalStyles/variables/variables";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password is too short - should be 6 chars minimum"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Mismatched passwords")
    .required("Please confirm your password"),
});

const RegisterForm = () => {
  const navigate = useNavigate();

  const registerHandler = async (values, { setSubmitting }) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
      role: "Therapist",
    };
    try {
      const response = await axios.post(URL + "register", payload, {
        withCredentials: true,
      });
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      if (error.reponse) {
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={registerHandler}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, preventDefault }) => (
        <div className="authContainer">
          <div className="authForm">
            <Form onSubmit={(preventDefault, handleSubmit)}>
              <h2 className="authForm__heading">Register</h2>
              <label id="fullname" className="authForm__label">
                Full name
              </label>
              <Field
                label="name"
                name="name"
                type="input"
                placeholder="Name"
                aria-labelledby="fullname"
              />
              <div className="authForm__error">
                <ErrorMessage name="name" />
              </div>
              <label id="email" className="authForm__label">
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                aria-labelledby="email"
              />
              <div className="authForm__error">
                <ErrorMessage data-testid="email-error" name="email" />
              </div>
              <label className="authForm__label">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                data-testid="password"
              />
              <div className="authForm__error">
                <ErrorMessage name="password" />
              </div>
              <label id="confirmPassword" className="authForm__label">
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                data-testid="confirmPassword"
              />
              <div className="authForm__error">
                <ErrorMessage name="confirmPassword" />
              </div>
              <button type="submit">Register</button>
              <Link className="authForm__link" to="/">
                Already have an account? Click here to login
              </Link>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
