import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // kenapa pakai ... karna untuk menjadikan data sebagai array
  const totalMaksimum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((alias) => (
        <ChartBar
          key={alias.label}
          value={alias.value}
          maxValue={totalMaksimum}
          label={alias.label}
        />
      ))}
    </div>
  );
};

export default Chart;
