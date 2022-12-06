import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./CreatePost.css";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  let navigate = useNavigate();

  //Fields will initially be blank for post
  const initialValues_ = {
    orgName: "",
    amount: "",
    userName: "",
    postText: "",
  };

  //Ensures that all fields are entered/formatted correctly
  const validationSchema_ = Yup.object().shape({
    orgName: Yup.string().required("You must input a title"),
    amount: Yup.string().required(),
    postText: Yup.string()
      .min(5)
      .required("You must enter a post greater than 5 characters"),
  });

  //Sends post request to database upon clicking submit
  const onSubmit_ = (data) => {
    data.userName = JSON.parse(localStorage.getItem('user'));
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("Success!");
      navigate("/contributions");
    });
  };

  //Format for creating post
  return (
    <div className="createpost">
      <Formik
        initialValues={initialValues_}
        onSubmit={onSubmit_}
        validationSchema={validationSchema_}
      >
        <Form>
          <div className="inputGroup">
            <label>Organization: </label>
            <ErrorMessage name="orgName" component="span" />
            <Field
              id="inputCreatePost"
              name="orgName"
              placeholder="Ex. V Foundation"
            />
          </div>
          <div className="inputGroup">
            <label>Contribution: </label>
            <ErrorMessage name="amount" component="span" />
            <Field
              id="inputCreatePost"
              name="amount"
              placeholder="Ex. '$20', or '3 hours'"
            />
          </div>
          <div className="inputGroup">
            <label>Post: </label>
            <ErrorMessage name="postText" component="span" />
            <Field
              id="inputCreatePost"
              name="postText"
              placeholder="Share your thoughts..."
            />
          </div>
          <button className="loginButton" type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
