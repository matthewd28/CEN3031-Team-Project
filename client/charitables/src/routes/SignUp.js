import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();

  //Values for username and password are initially blank
  const initialValues_ = {
    username: "",
    password: "",
  };

  //Ensures username/password are formatted correctly
  const validationSchema_ = Yup.object().shape({
    userName: Yup.string().required("You must enter a username"),
    password: Yup.string()
      .min(6)
      .max(20)
      .required("You must enter a password between 6-20 characters"),
  });

  //Posts username/password to database once requirements are met/user submits
  const onSubmit_ = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      window.location.reload(false);
    });
  };

  //Formatting for registration
  return (
      <Formik
        initialValues={initialValues_}
        onSubmit={onSubmit_}
        validationSchema={validationSchema_}
      >
        <Form>
          <div className="inputGroup">
            <label>Username</label>
            <ErrorMessage name="userName" component="span" />
            <Field
              id="inputCreatePost"
              name="userName"
              placeholder="Ex. JohnDoe123"
            />
          </div>
          <div className="inputGroup">
            <label>Password</label>
            <ErrorMessage name="password" component="span" />
            <Field
              autoComplete="off"
              type="password"
              id="inputCreatePost"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button className="loginButton" type="submit">Sign Up</button>
        </Form>
      </Formik>
  );
}

export default SignUp;
