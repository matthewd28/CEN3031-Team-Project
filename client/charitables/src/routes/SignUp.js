import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUp.css";
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
      console.log(data);
      navigate("/");
    });
  };

  //Formatting for registration
  return (
    <div className="registration">
      <Formik
        initialValues={initialValues_}
        onSubmit={onSubmit_}
        validationSchema={validationSchema_}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="userName" component="span" />
          <Field
            id="inputCreatePost"
            name="userName"
            placeholder="Ex. JohnDoe123"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Enter password"
          />

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUp;
