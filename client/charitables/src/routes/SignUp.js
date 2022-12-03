import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUp.css";
import axios from "axios";

function SignUp() {
  const initialValues_ = {
    username: "",
    password: "",
  };

  const validationSchema_ = Yup.object().shape({
    userName: Yup.string().required("You must enter a username"),
    password: Yup.string()
      .min(6)
      .max(20)
      .required("You must enter a password between 6-20 characters"),
  });

  const onSubmit_ = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };

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
