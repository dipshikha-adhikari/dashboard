import React, { useContext, useEffect, useMemo, useState } from 'react'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import {AreaChart,ResponsiveContainer, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import { context } from '../../context'
import './chart.css'
const data = [
  {
    "month": "Jan",
    "uv": 1000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "month": "Feb",
    "uv": 1500,
    "pv": 1398,
    "amt": 2210
  },
  {
    "month": "Mar",
    "uv": 1000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "month": "Apr",
    "uv": 1780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "month": "May",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  
  {
    "month": "Jun",
    "uv": 1490,
    "pv": 4300,
    "amt": 2100
  
  },
  {
    "month": "Jul",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  
  },
  {
    "month": "Aug",
    "uv": 2490,
    "pv": 4300,
    "amt": 2100
  },
  
  {
    "month": "Sep",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  
  },
  {
    "month": "Oct",
    "uv": 3200,
    "pv": 2000,
    "amt": 2100
  
  },
  {
    "month": "Nov",
    "uv": 2490,
    "pv": 4300,
    "amt": 2100
  
  },
  {
    "month": "Dec",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]


const UserChart = () => {
 const{state} = useContext(context)
const{users} = state
 
  return (
 <>
 <h2 className="heading">Users Chart</h2>
    <ResponsiveContainer width='99%' height={300} >
      <AreaChart
     
        data={data}
       
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>

 <div className="new_users">
        <h2 className="heading">New Members</h2>
       <div className="users">
       {users.map((user) => {
          return (
            <div className="user" key={user._id}>
            
              <div className="title">
                <span>{user.fullName}</span>
                <span>{user.address}</span>
              </div>
              <span>{user.email}</span>

              <Link to={`/userlist/${user._id}`} className='more'>  <RemoveRedEyeIcon /> </Link>
      
            </div>
          );
        })}
       </div>
  
 </div>
   </>
  )
}

export default UserChart