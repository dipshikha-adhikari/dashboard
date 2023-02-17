import React, { useContext, useEffect, useState } from "react";
import "./user.css";
import {useNavigate, useParams} from 'react-router-dom'
import {context} from '../../context'
import Modal from '../../components/modal/Modal'
const EditUser = () => {
  const id = parseInt(useParams().userId)
  const[isUpdating, setIsUpdating] = useState(false)
const[user, setUser] = useState()
const{state,dispatch} = useContext(context)
const navigate = useNavigate()
  useEffect(() => {
state.users.map(u => {
  if(u.id === id){
    setUser(u)
  }
})
  },[id]) 

  const handleChange  = (e) => {
setUser({...user, [e.target.name]:e.target.value})
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch({
      type:'EDIT_USER',
      payload:user
    })
    setIsUpdating(true)
    setTimeout(() => {
      setIsUpdating(false)
      navigate('/userlist')
    },2000)
  }
  return (
    <div className="edit_user">
      <h4 className="heading">Edit</h4>
        <form action="" onSubmit={handleUpdate}>
        
              <div className="form_control">
                <label htmlFor="">Username</label>
                <input type="text" name="username" value={user ? user.username : ''} onChange={handleChange}  required/>
              </div>
              <div className="form_control">
                <label htmlFor="">Fullname</label>
                <input type="text" value={user ? user.fullName : ''} onChange={handleChange} required />
              </div>
              <div className="form_control">
                <label htmlFor="">email</label>
                <input type="email" value={user ? user.email : ''}  onChange={handleChange} required/>
              </div>
              <div className="form_control">
                <label htmlFor="">Phone</label>
                <input type="number" value={user ? user.phone : ''}  onChange={handleChange} required/>
              </div>
              <div className="form_control">
                <label htmlFor="">Address</label>
                <input type="text" value={user ? user.address : ''} onChange={handleChange} required/>
              </div>
              <button className="update" type="submit" disabled={isUpdating}>Update</button>
        </form>
        {isUpdating && <Modal>
          <span>User updated</span>
        </Modal>}
      </div>
  );
};

export default EditUser;
