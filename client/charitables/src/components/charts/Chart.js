import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maximumVal = Math.max(...dataValues);

  return (
    <div className='graph'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumVal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;