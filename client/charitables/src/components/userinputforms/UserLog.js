import React, { useState } from 'react';

import './UserLog.css';

const UserLog = (props) => {

  const [enteredOrg, setEnteredOrg]  = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const orgChangeHandler = (event) => {
    setEnteredOrg(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    var userObj= JSON.parse(localStorage.getItem('user'));

    const logData = {
      userName: userObj,
      orgName: enteredOrg,
      amount: +enteredAmount,
      date: new Date(enteredDate) ,
    };
    
    props.onLog(logData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredOrg('');
  };

  let inputLabel;

  if (window.location.pathname === "/donations") {
    inputLabel = "Amount";
  } else {
    inputLabel = "Hours";
  }


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='log__controls'>
        <div className='log__control'>
          <label>Organisation Name</label>
          <input type='text' value={enteredOrg} onChange={orgChangeHandler} required/>
        </div>
        <br></br>
        <div className='log__control'>
          <label>{inputLabel}</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} required/>
        </div>
        <br></br>
        <div className='log__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} required/>
        </div>
        <br></br>
        <div className='log__actions'>
            <button className="new-log-button" type='submit'>Log {inputLabel}</button>
        </div>
      </div>
    </form>
  );
};

export default UserLog;