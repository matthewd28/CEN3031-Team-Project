import React from "react";
import "./Contributions.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import { Route, Routes, Link} from "react-router-dom";

function Contributions() {
  const [postList, setPostList] = useState([]);
  const [postModal, setPostModal] = useState(false);

  const togglePostModal = () => {
    setPostModal(!postModal)
  }

  //Retrieves user posts from database
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);

  return (
    //Creating path for navigation bar and formatting user fields for posts
    <div className="contributions">
      <button onClick={togglePostModal}
              className="postButton whiteLink"> 
              Create a Post!
      </button>
      <Routes>
        <Route path="/createpost" exact component={CreatePost} />
      </Routes>
      <div className="postField">
        {postList.map((value, key) => {
          return (
            <div key={key} className="post">
              <div className="orgName"> {value.orgName} </div>
              <div className="amount"> {value.amount} </div>
              <div className="userName"> {value.userName} </div>
              <div className="postText"> {value.postText} </div>
            </div>
          );
        })}
      </div>
      {postModal && (
        <div className="overlay">
          <div className="modal2 loginContainer">
            <button className="closeModal" onClick={togglePostModal}>X</button>
            <CreatePost/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contributions;
