import React from 'react';

import Chart from './charts/Chart';

const LogChart = (props) => {
  const chartData = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];
  
  for (const log of props.logs) {
    const logMonth = log.date.getMonth(); 
    chartData[logMonth].value += log.amount;
  }

  return <Chart dataPoints={chartData} />;
};

export default LogChart;