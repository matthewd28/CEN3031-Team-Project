import React from "react";
import "./Contributions.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";

function Contributions() {
  const [postList, setPostList] = useState([]);

  //Retrieves user posts from database
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);
  return (
    //Creating path for navigation bar and formatting user fields for posts
    <div className="contributions">
      <div className="postButton">
        <Link to="/createpost"> Create a Post!</Link>
      </div>
      <Routes>
        <Route path="/createpost" exact component={CreatePost} />
      </Routes>
      {postList.map((value, key) => {
        return (
          <div className="post">
            <div className="orgName"> {value.orgName} </div>
            <div className="amount"> {value.amount} </div>
            <div className="userName"> {value.userName} </div>
            <div className="postText"> {value.postText} </div>
          </div>
        );
      })}
    </div>
  );
}

export default Contributions;
