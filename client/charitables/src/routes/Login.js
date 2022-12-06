import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const initialValues_ = {
    userName: "",
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
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem('user', JSON.stringify(data.userName));
        navigate("/");
        window.location.reload(false);
      }
    });
  };

  return (
        <Formik
          initialValues={initialValues_}
          onSubmit={onSubmit_}
          validationSchema={validationSchema_}
        >
          <Form >
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
            <button className="loginButton" type="submit">Login</button>
          </Form>
        </Formik>
  );
}

export default Login;
