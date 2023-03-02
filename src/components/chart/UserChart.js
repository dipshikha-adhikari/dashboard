import React, { useContext, useEffect, useMemo, useState } from 'react'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import { AreaChart, ResponsiveContainer, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { context } from '../../context'
import './chart.css'
const data = [
  {
    "month": "Jan",
    "uv": 700,
    "pv": 2400,
    "amt": 2400
  },

  {
    "month": "Mar",
    "uv": 850,
    "pv": 9800,
    "amt": 2290
  },

  {
    "month": "May",
    "uv": 900,
    "pv": 4800,
    "amt": 2181
  },


  {
    "month": "Jul",
    "uv": 1170,
    "pv": 4300,
    "amt": 2100

  },

  {
    "month": "Sep",
    "uv": 1250,
    "pv": 4300,
    "amt": 2100

  },

  {
    "month": "Nov",
    "uv": 1400,
    "pv": 4300,
    "amt": 2100
  }
]


const UserChart = () => {
  const { state } = useContext(context)
  const { users } = state

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
          {users.length !== 0 ? users.map((user) => {
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
    </>
  )
}

export default UserChart