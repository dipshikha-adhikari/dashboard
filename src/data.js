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

export const transactionsData = [
  {
    key: '11',
    name: 'John Brown',
    status: 'completed',
    class: 10,
    address: 'New York No. 1 Lake Park',
    total: '$230'
  },
  {
    key: '12',
    name: 'Jim Green',
    status: 'canceled',
    class: 10,
    address: 'London No. 1 Lake Park',
    total: '$210'

  },
  {
    key: '13',
    name: 'Joe Black',
    class: 9,
    status: 'pending',
    address: 'Sydney No. 1 Lake Park',
    total: '$30'

  },
  {
    key: '14',
    name: 'Jim Green',
    class: 8,
    status: 'canceled',
    address: 'London No. 1 Lake Park',
    total: '$210'

  },
  {
    key: '15',
    name: 'Joe Black',
    class: 9,
    status: 'pending',
    address: 'Sydney No. 1 Lake Park',
    total: '$30'

  },
  {
    key: '16',
    name: 'Jim Green',
    class: 7,
    status: 'canceled',
    address: 'London No. 1 Lake Park',
    total: '$210'

  },
  {
    key: '17',
    name: 'Joe Black',
    class: 10,
    status: 'pending',
    address: 'Sydney No. 1 Lake Park',
    total: '$30'

  }
];

export const transactionsColumns = [
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

    onCell: (text) => {
      return {
        props: {
          style: { color: text === 'canceled' ? 'red' : text === 'pending' ? '#E7B10A' : '#5D9C59' }
        },
        children: <span>{text}</span>
      }
    },

  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Class',
    dataIndex: 'class',
    key: 'class',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  }
];


export const talentsInSubjects = [
  {
    key: '112',
    type: 'Science',
    value: '27%',
  },
  {
    key: '113',

    type: 'Math',
    value: '23%',

  },
  {
    key: '114',

    type: 'English',
    value: '40%',

  },
  {
    key: '115',

    type: 'other',
    value: '50%',

  }


]

export const talentsInSubjectsColumns = [
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

]


export const  students = [
  {
      id: 1,
      rollNo: 1,
      name: 'Bivash Adhikari',
      phone: '9807543210',
      parent: 'Dip Adhikari',
      address: 'Kapilvastu',
      class: 10
  },
  {
      id: 2,
      rollNo: 2,
      name: 'Sameer Fuddi',
      phone: '9804320000',
      parent: 'Bhuwan Bam',
      address: 'Delhi',
      class: 10

  },
  {
      id: 3,
      rollNo: 3,
      name: 'John Lenon',
      phone: '9800320000',
      parent: 'The Beatles',
      address: 'London',
      class: 7

  },
  {
      id: 4,
      rollNo: 4,
      name: 'Ronaldo JR',
      phone: '9801320000',
      parent: 'Cristiano Ronaldo',
      address: 'Portugal',
      class: 8

  },
  {
      id: 5,
      rollNo: 5,
      name: 'Suman Karki',
      phone: '9800320001',
      parent: 'Bir Karki',
      address: 'Butwal',
      class: 9

  },
  {
      id: 6,
      rollNo: 6,
      name: 'Paul',
      phone: '9801320002',
      parent: 'Santos',
      address: 'London',
      class: 5

  },
  {
      id: 7,
      rollNo: 21,
      name: 'Mick Jagger',
      phone: '9801320002',
      parent: 'Laminar Jagger',
      address: 'USA',
      class: 6


  },
  {
      id: 6,
      rollNo: 20,
      name: 'Pogba',
      phone: '9801320002',
      parent: 'Modric',
      address: 'France',
      class: 5

  }
]


export const  teachers = [
  {
      id: 121,
      name: 'Elon Musk',
      periods: 4,
      subjects: ['Science, Math'],
      phone: '98000000',
      classes: [10, 12],
      image: 'https://images-prod.dazeddigital.com/900/azure/dazed-prod/1340/4/1344788.jpg',

  },

]

export const toppers = [
  {
      rollNo: 1,
      class: 10
  }, {
      rollNo: 5,
      class: 9
  }, {
      rollNo: 6,
      class: 5

  }, {
      rollNo: 3,
      class: 8

  }, {
      rollNo: 4,
      class: 7
  }, {
      rollNo: 21,
      class: 6
  }
]
