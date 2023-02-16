import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { context } from '../../context'

const User = () => {
    const id = parseInt(useParams().userId )
const{state} = useContext(context)
const[user, setUser] = useState()
    useEffect(() =>{
state.users.map(u => {
    if(u.id === id){
        setUser(u)
    }
})
    },[])

  return (
   <div >
    {user && <div className='user'>
        <h4>{user.username}</h4>
        <div className='info'>
            <span>username : {user.fullName}</span>
            <span>email : {user.email}</span>
            <span>phone : {user.phone}</span>
            <span>address : {user.address}</span>
        </div>
        <Link to={`/userlist/edit/${user.id}`} className='edit_btn'>Edit</Link>
    </div>}
   </div>
  )
  
}

export default User