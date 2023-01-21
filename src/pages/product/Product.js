import React from 'react'
import './product.css'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useLocation } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';

const data = [
  {
    name: 'Jan',
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 700,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 1600,
    pv: 9800,
    amt: 2290,
  },
 
];

const Product = () => {
  const location = useLocation()
  let productId =location.pathname.split('/')[2]
  const product = useSelector(state => state.product.products.find(p => p._id === productId))

  return (
  <div className="product">
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
       <div className='header'><img src={product.img} alt="" /> <h4>{product.title}</h4></div>
        <div className='info'>
         <div><span>id</span>{product._id}</div>
        </div>
      </div>
    </div>
    {/* bottom  */}
    <div className="bottom">
      <div className="left">
       <div className="title">Product Name</div>
       <div><input type="text" placeholder={product.title} /></div>
       <div className='form_control'><label htmlFor="">In Stock</label> 
       <select  className='select' >
       
        <option value="yes">Yes</option>
        <option value="no">No</option>
       </select>
       </div>
    
      </div>

      <div className="right">
        <div><img src={product.img} alt="" />
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