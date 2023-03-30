import React from "react";
export const incomeData = [
  {
    name: "Jan",
    income: 1200,
  },
  {
    name: "Feb",
    income: 2000,
  },
  {
    name: "Mar",
    income: 2200,
  },
  {
    name: "Apr",
    income: 2580,
  },
  {
    name: "May",
    income: 1890,
  },
  {
    name: "Jun",
    income: 2390,
  },
  {
    name: "Jul",
    income: 2990,
  },
  {
    name: "Aug",
    income: 2790,
  },
  {
    name: "Sep",
    income: 3290,
  },
  {
    name: "Oct",
    income: 3420,
  },
  {
    name: "Nov",
    income: 3600,
  },
  {
    name: "Dec",
    income: 3890,
  },
 
];

export  const orderData = [
  {
    key: '1',
    name: 'John Brown',
    status: 'completed',
    address: 'New York No. 1 Lake Park',
    total:'$230'
  },
  {
    key: '2',
    name: 'Jim Green',
    status: 'canceled',
    address: 'London No. 1 Lake Park',
    total:'$210'

  },
  {
    key: '3',
    name: 'Joe Black',
   status:'pending',
    address: 'Sydney No. 1 Lake Park',
    total:'$30'

  },
  {
    key: '2',
    name: 'Jim Green',
    status: 'canceled',
    address: 'London No. 1 Lake Park',
    total:'$210'

  },
  {
    key: '3',
    name: 'Joe Black',
   status:'pending',
    address: 'Sydney No. 1 Lake Park',
    total:'$30'

  },
  {
    key: '2',
    name: 'Jim Green',
    status: 'canceled',
    address: 'London No. 1 Lake Park',
    total:'$210'

  },
  {
    key: '3',
    name: 'Joe Black',
   status:'pending',
    address: 'Sydney No. 1 Lake Park',
    total:'$30'

  },
  {
    key: '2',
    name: 'Jim Green',
    status: 'canceled',
    address: 'London No. 1 Lake Park',
    total:'$210'

  },
  {
    key: '3',
    name: 'Joe Black',
   status:'pending',
    address: 'Sydney No. 1 Lake Park',
    total:'$30'

  },
];

export const orderColumns = [
  {
    title: 'No',
    dataIndex: 'key',
    key: 'key',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width:200
  },
{
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
      }   
];


export const salesData = [
  {
    type: 'cloth',
    value: '27%',
    amount:'$340'
  },
  {
    type: 'food',
    value: '23%',
    amount:'$250'

  },
  {
    type: 'watch',
    value: '18%',
    amount:'$140'

  },
  {
    type: 'phone',
    value: '12%',
    amount:'$302'

  },
  {
    type: 'other',
    value: '20%',
    amount:'$120'

  },
  
]

export const salesColumns = [
  {
    title: 'Items',
    dataIndex: 'type',
    key: 'type',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Percentage',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
]