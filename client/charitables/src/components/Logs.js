import React, { useState } from 'react';
import LogItem from "./LogItem";
import LogFilter from "./LogFilter";
import LogChart from "./LogChart";

import './Logs.css';

function Logs(props){
  
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredLogs = props.items.filter((log) => {
    return log.date.getFullYear().toString() === filteredYear;
  });

  let logHis;

  if (window.location.pathname === "/donations") {
    logHis = <p className="nologs">No donations found</p>;
  } else {
    logHis = <p className="nologs">No hours found</p>;
  }

  if (filteredLogs.length > 0) {
    logHis = filteredLogs.map((log) => (
      <LogItem 
      key = {log.id}
      orgName = {log.orgName} 
      amount = {log.amount}
      date = {log.date}
       />
    ));
  }

    return (
    <div className="logs">
      <LogFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <LogChart logs ={filteredLogs} />
      <div className="entries">{logHis}</div>
    </div>
    );
};

export default Logs;