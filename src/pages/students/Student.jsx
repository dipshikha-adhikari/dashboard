import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { context } from '../../context'
import './student.css'

const Student= () => {
    const id = parseInt(useParams().id )
const{state} = useContext(context)
const[student, setStudent] = useState()
    useEffect(() =>{
state.students.map(u => {
    if(u.id === id){
        setStudent(u)
    }
})
    },[])
console.log(student)
  return (
   <div >
    {student && <div className='student'>
        <h4>{student.name}</h4>
        <div className='info'>
            <span>Class : {student.class}</span>
            <span>RollNo : {student.rollNo}</span>
            <span>Phone : {student.phone}</span>
            <span>Address : {student.address}</span>
            <span>Parent : {student.parent}</span>
        </div>
        <Link to={`/students/edit/${student.id}`} className='edit_btn'>Edit</Link>
    </div>}
   </div>
  )
  
}

export default Student