import React from 'react';

import './LogFilter.css';

const LogFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='log-filter'>
      <div className='log-filter__control'>
        <label>Filter by year</label>
        <select className="selected" value={props.selected} onChange={dropdownChangeHandler}>
          <option className="option" value='2022'>2022</option>
          <option className="option" value='2021'>2021</option>
          <option className="option" value='2020'>2020</option>
          <option className="option" value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default LogFilter;