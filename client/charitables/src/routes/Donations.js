import React from "react";
import Logs from "../components/Logs";
import NewLog from "../components/userinputforms/NewLog";
import axios from "axios";
import { useEffect, useState } from "react";

function Donate() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/donations").then((response) => {
      setDonations(response.data);
    });
  }, []);

  const filteredDonations = donations.filter((donation) => {
    var date = new Date(donation.date);
    var userTimezoneOffset = date.getTimezoneOffset() * 60000;
    donation.date = new Date(date.getTime() + userTimezoneOffset);
    return donation.userName === JSON.parse(localStorage.getItem('user'));
  });

  const donationDataHandler = (donation) => {
    setDonations((prevDonations) => {
      return [donation, ...prevDonations];
    });
  };

  return (
    <div>
      <NewLog onSaveLog={donationDataHandler} />
      <Logs items={filteredDonations} />
    </div>
  );
}

export default Donate;