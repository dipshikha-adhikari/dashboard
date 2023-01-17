import React from 'react'
import './product.css'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 1700,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 600,
    pv: 9800,
    amt: 2290,
  },
 
];

const Product = () => {
  return (
  <div className="product">
    {/* <div className="title">Product</div> */}
    <div className="top">
      <div className="left">  
        <h4>Sale Perfomance</h4>
      <ResponsiveContainer   height={200} className='responsive_chart'>
   
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
      <div className="right">
       <div className='header'><img src="https://m.media-amazon.com/images/I/61xawq2UArL._AC_UY1000_.jpg" alt="" /> <h4>Nike Jacket</h4></div>
        <div className='info'>
         <div><span>id</span>241</div>
         <div><span>sales</span>5423</div>
         <div><span>active</span>yes</div>
         <div><span>in stock</span>yes</div>
        </div>
      </div>
    </div>
    {/* bottom  */}
    <div className="bottom">
      <div className="left">
       <div className="title">Product Name</div>
       <div><input type="text" value='Nike Jacket' /></div>
       <div className='form_control'><label htmlFor="">In Stock</label> 
       <select  className='select'>
       
        <option value="yes">Yes</option>
        <option value="yes">No</option>
       </select>
       </div>
       <div className='form_control'><label htmlFor="">Active</label> 
       <select  className='select'>
   
        <option value="yes">Yes</option>
        <option value="yes">No</option>
       </select>
       </div>
      </div>

      <div className="right">
        <div><img src="https://m.media-amazon.com/images/I/61xawq2UArL._AC_UY1000_.jpg" alt="" />
        <span>
<CloudUploadIcon/>
        </span>
        </div>
        <button className="upload_btn">Upload</button>
      </div>
    </div>
    {/* end of bottom  */}
  </div>
  )
}

export default Product