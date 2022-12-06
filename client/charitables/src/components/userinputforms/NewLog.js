import React, { useState } from 'react';
import UserLog from './UserLog';
import './NewLog.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewLog = (props) => {
   let navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);

  const logDataHandler = (enteredLogData) => {
    const logDatatoSave = {
      ...enteredLogData,
      id : Math.random().toString(),
      date: new Date(enteredLogData.date),
    };
    
    props.onSaveLog(logDatatoSave);
    
    if (window.location.pathname === "/donations") {
      axios.post("http://localhost:3001/donations", logDatatoSave).then((response) => {
        navigate("/donations");
      }); 
    }
    else {
      axios.post("http://localhost:3001/hours", logDatatoSave).then((response) => {
        navigate("/hours");
      }); 
    }

    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  
  const buttonLabel = (window.location.pathname === "/donations") ? "Donation" : "Hours";

  return (
    <div className='new-log'>
     {!isEditing && (<button className="new-log-button" onClick={startEditingHandler}>Log {buttonLabel}</button> )}
     {isEditing && (
        <div className="overlay">
          <div className=" modal2 loginContainer">
            <button className="closeModal" onClick={stopEditingHandler}>X</button>
            <UserLog 
            onLog={logDataHandler}
            onCancel={stopEditingHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewLog;