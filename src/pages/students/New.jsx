import React, { useContext, useState } from 'react'
import './student.css'
import { context } from '../../context'
import Modal from '../../components/modal/Modal'

const New = () => {
    const{state, dispatch} = useContext(context)
    const[isAdding, setIsAdding] = useState(false)
const [student, setStudent] = useState({
    id:new Date().getUTCMilliseconds(),
    rollNo:'',
    class:'',
    name:'',
   phone:'',
    address:'',
    parent:''
})
const resetForm = () => {
    setStudent({
        id:'',
        rollNo:'',
        class:'',
        name:'',
       phone:'',
        address:'',
        parent:''
    })
}

const handleChange = (e) => {
setStudent({...student, [e.target.name]: e.target.value, id:new Date().getUTCMilliseconds()})
}
const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
        type:'ADD_STUDENT',
        payload:student
    })
    setIsAdding(true)
    
    setTimeout(() => {
setIsAdding(false)
resetForm()
    },2000)
}

  return (
   <div className="new_student">
   <h3 className='heading'>New Student</h3>
    <form action="" onSubmit={handleSubmit}>
<div className="form_control">
    <label htmlFor="">FullName</label>
    <input type="text" name='name' value={student.name} onChange={handleChange} required/>
</div>
<div className="form_control">
    <label htmlFor="">Roll No</label>
    <input type="number" name='rollNo' value={student.rollNo} onChange={handleChange} required/>
</div>
<div className="form_control">
    <label htmlFor="">Class</label>
    <input type="number" name='class' value={student ? student.class : ''} onChange={handleChange} required/>
</div>
{/* <div className="form_control">
    <label htmlFor="">Phone</label>
    <input type="number" name='phone' value={student ? student.phone : ''} onChange={handleChange} required/>
</div> */}

<div className="form_control">
    <label htmlFor="">Address</label>
    <input type="text" name='address' value={student ? student.address : ''} onChange={handleChange} required/>
</div>
<div className="form_control">
    <label htmlFor="">Parent</label>
    <input type="text" name='parent' value={student ? student.parent : ''} onChange={handleChange} required/>
</div>
<button className="create" type='submit' disabled={isAdding}>Create</button>

    </form>
    {isAdding && <Modal>
        <span>Student created</span>
    </Modal>}
   </div>
  )
}

export default New