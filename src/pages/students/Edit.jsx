import React, { useContext, useEffect, useState } from "react";
import "./student.css";
import {useNavigate, useParams} from 'react-router-dom'
import {context} from '../../context'
import Modal from '../../components/modal/Modal'


const Edit = () => {
  const id = parseInt(useParams().id)
  const[isUpdating, setIsUpdating] = useState(false)
const[student, setStudent] = useState()
const{state,dispatch} = useContext(context)
const navigate = useNavigate()
  useEffect(() => {
state.students.map(u => {
  if(u.id === id){
    setStudent(u)
  }
})
  },[id]) 

  const handleChange  = (e) => {
setStudent({...student, [e.target.name]:e.target.value})
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch({
      type:'EDIT_STUDENT',
      payload:student
    })
    setIsUpdating(true)
    setTimeout(() => {
      setIsUpdating(false)
      navigate('/students')
    },2000)
  }
  return (
    <div className="edit_student">
      <h4 className="heading">Edit</h4>
        <form action="" onSubmit={handleUpdate}>
        
              <div className="form_control">
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={student ? student.name : ''} onChange={handleChange}  required/>
              </div>
              <div className="form_control">
                <label htmlFor="">Roll No</label>
                <input type="text" name="rollNo" value={student ? student.rollNo : ''} onChange={handleChange} required />
              </div>
              <div className="form_control">
                <label htmlFor="">Class</label>
                <input type="number" name="class" value={student ? student.class : ''} onChange={handleChange} required />
              </div>
              <div className="form_control">
                <label htmlFor="">Phone</label>
                <input type="phone" name="phone" value={student ? student.phone : ''}  onChange={handleChange} required/>
              </div>
              <div className="form_control">
                <label htmlFor="">Address</label>
                <input type="text" name="address" value={student ? student.address : ''}  onChange={handleChange} required/>
              </div>
              <div className="form_control">
                <label htmlFor="">Parent</label>
                <input type="text" name="parent" value={student ? student.parent : ''} onChange={handleChange} required/>
              </div>
              <button className="update" type="submit" disabled={isUpdating}>Update</button>
        </form>
        {isUpdating && <Modal>
          <span>student updated</span>
        </Modal>}
      </div>
  );
};

export default Edit;
