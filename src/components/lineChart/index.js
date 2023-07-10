import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts';


const Chart = () => {

  const uData = [60, 80, 68, 75, 85, 90, 85];
  const xLabels = [
    '2019',
    '2020',
    '2021',
    '2022',
    '2023'
    
  ];

  return  <LineChart
  height={400}
  series={[{ data: uData, label: 'uv', area: true , color:'rgb(5, 146, 113)'}]}
  xAxis={[{ scaleType: 'point', data: xLabels }]}
  sx={{
    '.MuiLineElement-root, .MuiMarkElement-root': {
      display: 'none', width:'100%'
    },
  }}
/>
};

export default Chart