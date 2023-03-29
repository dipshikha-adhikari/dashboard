import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const Chart = () => {
  const data = [
    {
      type: 'Jan',
      sales: 330,
    },
    {
      type: 'Feb',
      sales: 522,
    },
    {
      type: 'Mar',
      sales: 621,
    },
    {
      type: 'Apr',
      sales: 545,
    },
    {
      type: 'May',
      sales: 648,
    },
    {
      type: 'Jun',
      sales: 738,
    },
    {
      type: 'Jul',
      sales: 778,
    },
    {
      type: 'Aug',
      sales: 838,
    },
    {
      type: 'Sep',
      sales: 708,
    },
    {
      type: 'Oct',
      sales: 808,
    },
    {
      type: 'Nov',
      sales: 789,
    },
    {
      type: 'Dec',
      sales: 980,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    columnWidthRatio: 0.8,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'month',
      },
      sales: {
        alias: 'amount',
      },
    },
  };
  return <Column {...config}  />;
};

export default Chart