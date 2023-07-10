import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './teacher.css'
import { context } from '../../context';
import Modal from '../../components/modal/Modal';
import {useNavigate} from 'react-router-dom'

const Edit = () => {
 const{state, dispatch} = useContext(context)
 const[teachers, setTeachers] = useState()
 const[isUpdating, setIsUpdating] = useState(false)
 const id = parseInt(useParams().id )
 const navigate = useNavigate()

 useEffect(() => {
state.teachers.map(p => {
    if (p.id === id){
        setTeachers(p)
    }
})
 },[id])

 const handleChange = (e) => {
setTeachers({...teachers, [e.target.name]:e.target.value})
 }
const handleFile = (e) => {
let url = URL.createObjectURL(e.target.files[0])
setTeachers({...teachers, image:url})
}
const handleSubmit = (e) => {
    e.preventDefault()
dispatch({
    type:'EDIT_TEACHER',
    payload:teachers 
})

setIsUpdating(true)
setTimeout(() => {
    setIsUpdating(false)
    navigate('/teachers')
},2000)
}
  return (
  <div className="edit_teacher">
   
   
   <form action="" onSubmit={handleSubmit}>
   <div className="form_control">
        <label htmlFor="">Name</label>
        <input type="text" name='name' value={teachers ? teachers.name : ''}  onChange={handleChange} required={true}/>
    </div>
    <div className="form_control">
        <label htmlFor="">Subjects</label>
        <input type="text" name='subjects' value={teachers ? teachers.subjects : ''} onChange={handleChange} required={true}/>
    </div>
    <div className="form_control">

        <label htmlFor="">Image</label>
        <img src={teachers ? teachers.image : ''} alt="" className='image'/>

        <input type="file" name='image' accept='/image/*' onChange={handleFile} />
    </div>
       <div className='form_control'>
       <label htmlFor="">Periods</label> 
       <input type="number" name='periods' value={teachers ? teachers.periods : ''} onChange={handleChange} required={true}/>
        </div>
       <div className='form_control'>
       <label htmlFor="">Classes</label> 
       <input type="text" name='classes' value={teachers ? teachers.classes : ''} onChange={handleChange} required={true}/>
        </div>
       <div className='form_control'>
       <label htmlFor="">Phone</label> 
       <input type="number" name='phone' value={teachers ? teachers.phone : ''} onChange={handleChange} required={true}/>
        </div>
<button className="update_btn" type='submit' disabled={isUpdating}>Update</button>

   </form>
   {isUpdating &&  <Modal>
        <span>teacher updated</span>
    </Modal>}
    
  </div>
  )
}

export default Edit