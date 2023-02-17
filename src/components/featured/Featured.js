import React, { useEffect, useState } from 'react'
import './feature.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



const Featured = () => {

  return (<>
{/* <div className={`${isSidebarOpen ? "featured  push" : "featured"}`}> */}
<div className="featured">
 
  
  <div className="featured_item">
    <h2 className="title">Users</h2>
    <div className="item_info">
    <span className='quantity'>1400</span>
<span className="rate">
  +150 <ArrowUpwardIcon className='up'/>
</span>
    </div>
      <span className='info'>Compared to last month</span>
  </div>

  <div className="featured_item">
    <h2 className="title">Products</h2>
    <div className="item_info">
    <span className='quantity'>70</span>
<span className="rate">
  -10 <ArrowDownwardIcon className='down'/>
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