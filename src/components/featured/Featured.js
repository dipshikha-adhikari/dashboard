import React, { useContext, useEffect, useState } from 'react'
import './feature.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { context } from '../../context';



const Featured = () => {
const{state} = useContext(context)
  return (<>
{/* <div className={`${isSidebarOpen ? "featured  push" : "featured"}`}> */}
<div className="featured">
 
  
  <div className="featured_item">
    <h2 className="title">Users</h2>
    <div className="item_info">
    <span className='quantity'>{state.userCount}</span>
<span className="rate">
{state.userCount - state.prevUserCount }{state.userCount - state.prevUserCount < 0 ?<ArrowDownwardIcon className='down'/> : <ArrowUpwardIcon className='up'/> } 

</span>
    </div>
      <span className='info'>Compared to last month</span>
  </div>

  <div className="featured_item">
    <h2 className="title">Products</h2>
    <div className="item_info">
    <span className='quantity'>{state.productCount}</span>
<span className="rate">
  {state.productCount - state.prevProductCount }{state.productCount - state.prevProductCount < 0 ?<ArrowDownwardIcon className='down'/> : <ArrowUpwardIcon className='up'/> } 
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