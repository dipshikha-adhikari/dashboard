import React, { useContext, useState } from 'react'
import './teacher.css'
import {context} from '../../context'
import Modal from '../../components/modal/Modal'

const New = () => {
const[isAdding, setIsAdding] = useState(false)
const{state,dispatch} = useContext(context)

const[teacher, setTeacher] = useState({
   id:new Date().getUTCMilliseconds(),
   name:'',
  classes:'',
   periods:'true',
   image:'',
   phone:'',
   subjects:''
   
})
   const resetForm = () =>{
    setTeacher({
      id:'',
      name:'',
      classes:'',
       periods:'true',
       image:'',
       phone:'',
       subjects:''
    })
   }
const handleChange = (e) => {
   setTeacher({...teacher, [e.target.name]: e.target.value, id:new Date().getUTCMilliseconds()})
   }
   const handleFile = (e) => {
let url = URL.createObjectURL(e.target.files[0])
setTeacher({...teacher,img:url})
   }
   const handleSubmit = (e) => {
       e.preventDefault()
      if(teacher.id !== ''){
         dispatch({
            type:'ADD_TEACHER',
            payload:teacher
        })
        setIsAdding(true)
        setTimeout(() => {
    setIsAdding(false)
    resetForm()
        },2000)
      }
   }

   
  return (
  <div className="new_teacher">
    <h3 className='heading'>New Teacher</h3>
    <form action="" onSubmit={handleSubmit}>
    <div className="form_control">
     <label htmlFor="">Name</label>
        <input type="text" name='name' value={teacher ? teacher.name : ''} onChange={handleChange} required={true}/>
     </div>
    <div className="form_control">
     <label htmlFor="">Phone</label>
        <input type="number" name='phone' value={teacher ? teacher.phone : ''} onChange={handleChange} required={true}/>
     </div>
     <div className="form_control">
     <label htmlFor="">Image</label>
        <input type="file" name='image' onChange={handleFile} />
     </div>
     <div className="form_control">
     <label htmlFor="">Subjects</label>
        <input type="text" name='subjects' value={teacher ? teacher.subjects : ''} onChange={handleChange} required={true}/>
     </div>
     <div className="form_control">
     <label htmlFor="">Classes</label>
        <input type="number" name='classes' value={teacher ? teacher.classes : ''}  onChange={handleChange} required={true}/>
     </div>
     <div className="form_control">
     <label htmlFor="">Periods</label>
     <input type="number" name='periods' value={teacher ? teacher.periods : ''}  onChange={handleChange} required={true}/>
    
     </div>

     <button className="create_btn" type='submit' disabled={isAdding}>Create</button>
    </form>
    {isAdding && <Modal>
      <span>teacher added</span>
    </Modal>}
  </div>
  )
}

export default New