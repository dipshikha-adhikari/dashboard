import React, { useContext, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallMadeIcon from '@mui/icons-material/CallMade';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import './widget.css'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import { context } from '../../context'
import Chart from '../barChart';

const Widget = () => {
  const { state } = useContext(context)
  const { users } = state

  return (
    <div className='widget'>

<section className='section_1'>
<div className='box'>
<span className="heading">  Total sales
    <MoreVertIcon/></span>
        <h2 className='amount'>$4423.00</h2>
       <div className="changes">
       <span className='green' ><CallMadeIcon/> 32.4%</span>
        <span>Compared to last month</span>
       </div>
</div>
<div className='box'>
<span className="heading"> Average order value
    <MoreVertIcon/></span>
        <h2 className='amount'>$4423.00</h2>
       <div className="changes">
       <span className='red'><SouthEastIcon/> 2.4%</span>
        <span>Compared to last month</span>
       </div>
</div>
<div className='box'>
<span className="heading">  Total orders
    <MoreVertIcon/></span>
        <h2 className='amount'>423</h2>
       <div className="changes">
       <span className='red'><SouthEastIcon/> 10.4%</span>
        <span>Compared to last month</span>
       </div>
</div>
</section>

<section className="section_2">
  <div className="new_users">
    <h4 className='heading'>New users</h4>
    <div className="users">
          {users.length !== 0 ? users.slice(0,5).map((user) => {
            return (
              <div className="user" key={user.id}>
                <div className="title">
                  <span>{user.fullName}</span>
                  <span>{user.address}</span>
                  
                </div>
                <span className='email'>{user.email}</span>
                <Link to={`/userlist/${user.id}`} className='more'>  <RemoveRedEyeIcon /> </Link>
              </div>
            );
          }) : <span style={{textAlign:'center'}}>No users</span>}
  </div>
  </div>

  <div className="chart">
    <h4 className='heading'>Income statistics</h4>
  <Chart/>

  </div>
</section>
</div>
  )
}

export default Widget