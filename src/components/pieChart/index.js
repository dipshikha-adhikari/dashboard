import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = () => {
  const data = [
    {
      type: 'Science',
      value: 27,
    },
    {
      type: 'Math',
      value: 23,
    },
    {
      type: 'English',
      value: 40,
    },
    {
      type: 'other',
      value: 10,
    }

  ];
  const config = {

    data,
    angleField: 'value',
    colorField: 'type',


    radius: 0.8,
    style: {
      fontSize: 14,
      textAlign: 'center',

    },

  };
  return <Pie {...config} />;
};

export default PieChart