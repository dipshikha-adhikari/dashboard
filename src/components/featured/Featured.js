import React from 'react'
import './feature.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useGlobalContext } from '../../context';
import Chart from '../chart/Chart';


const Featured = () => {
const {isSidebarOpen} = useGlobalContext()

  return (<>
{/* <div className={`${isSidebarOpen ? "featured  push" : "featured"}`}> */}
<div className="featured">
  <div className="featured_item">
    <h2 className="title">Revenue</h2>
    <div className="amount_container">
    <span className='amount'>$ 4,234</span>
<span className="rate">
  -21 <ArrowDownwardIcon className='down'/>
</span>
    </div>
      <span className='info'>Compared to last month</span>
  </div>
  
  <div className="featured_item">
    <h2 className="title">Revenue</h2>
    <div className="amount_container">
    <span className='amount'>$ 4,234</span>
<span className="rate">
  -21 <ArrowDownwardIcon className='down'/>
</span>
    </div>
      <span className='info'>Compared to last month</span>
  </div>

  <div className="featured_item">
    <h2 className="title">Revenue</h2>
    <div className="amount_container">
    <span className='amount'>$ 4,234</span>
<span className="rate">
  -21 <ArrowDownwardIcon className='down'/>
</span>
    </div>
      <span className='info'>Compared to last month</span>
  </div>
</div>

{/* <Chart/> */}
</>
  )
}

export default Featured