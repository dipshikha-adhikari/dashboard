import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = () => {
  const data = [
    {
      type: 'cloth',
      value: 27,
    },
    {
      type: 'food',
      value: 25,
    },
    {
      type: 'watch',
      value: 18,
    },
    {
      type: 'phone',
      value: 15,
    },
    {
      type: 'other',
      value: 10,
    },

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