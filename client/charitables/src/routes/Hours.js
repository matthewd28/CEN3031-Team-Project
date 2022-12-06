import React from "react";
import Logs from "../components/Logs";
import NewLog from "../components/userinputforms/NewLog";
import axios from "axios";
import { useEffect, useState } from "react";

function Hours() {
  const [hoursList, setHours] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/hours").then((response) => {
      setHours(response.data);
    });
  }, []);

  const filteredHours = hoursList.filter((hours) => {
    var date = new Date(hours.date);
    var userTimezoneOffset = date.getTimezoneOffset() * 60000;
    hours.date = new Date(date.getTime() + userTimezoneOffset);
    return hours.userName === JSON.parse(localStorage.getItem('user'));
  });

  const hoursDataHandler = (hours) => {
    setHours((prevHours) => {
      return [hours, ...prevHours];
    });
  };

  return (
    <div>
      <NewLog onSaveLog={hoursDataHandler} />
      <Logs items={filteredHours} />
    </div>
  );
}

export default Hours;