import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
const ProductChart = () => {

 
      
      const data = [
        {
          name: 'Jan',
          uv: 40,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Mar',
          uv: 70,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'May',
          uv: 50,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Jul',
          uv: 70,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Sep',
          uv: 80,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Nov',
          uv: 70,
          pv: 9800,
          amt: 2290,
        },
       
      ];
      
  return (
    <div className='products_chart'>
 <h2 className='heading'> Product Chart</h2>
         <ResponsiveContainer   height={200} width='99%' className='chart'>
   
   <LineChart
  
     height={100}
     data={data}
     syncId="anyId"
     margin={{
       top: 10,
       right: 30,
       left: 0,
       bottom: 0,
     }}
   >
     <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="name" />
     <YAxis />
     <Tooltip />
     <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
   </LineChart>
 </ResponsiveContainer>
    </div>
  )
}

export default ProductChart