import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
        <img src="https://media.istockphoto.com/id/1043738948/photo/businessman-challenge-concept-for-success.jpg?s=612x612&w=0&k=20&c=D6pE_26aJWYR32Sx3vEOZUewh91EwdhaoPQOAI8_NyM=" alt="" />
       <div className="info">
       <h1>You are lost</h1>
        <Link to='/' className='link'>Go back home</Link>
       </div>
    </div>
  )
}

export default Error