import React, { useContext, useState } from 'react'
import './new.css'
import { context } from '../../context'
import Modal from '../../components/modal/Modal'
const NewUser = () => {
    const{state, dispatch} = useContext(context)
    const[isAdding, setIsAdding] = useState(false)
const [user, setUser] = useState({
    id:new Date().getUTCMilliseconds(),
    username:'',
    fullName:'',
    email:'',
    address:'',
    phone:''
})
const resetForm = () => {
    setUser({
        id:'',
        username:'',
        fullName:'',
        email:'',
        address:'',
        phone:''
    })
}

const handleChange = (e) => {
setUser({...user, [e.target.name]: e.target.value, id:new Date().getUTCMilliseconds()})
}
const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
        type:'ADD_USER',
        payload:user
    })
    setIsAdding(true)
    setTimeout(() => {
setIsAdding(false)
resetForm()
    },2000)
}

  return (
   <div className="new_user">
   <h3 className='header'>New User</h3>
    <form action="">
<div className="form_control">
    <label htmlFor="">Username</label>
    <input type="text" name='username' value={user.username} onChange={handleChange}/>
</div>
<div className="form_control">
    <label htmlFor="">Email</label>
    <input type="text" name='email' value={user ? user.email : ''} onChange={handleChange}/>
</div>
<div className="form_control">
    <label htmlFor="">Phone</label>
    <input type="number" name='phone' value={user ? user.phone : ''} onChange={handleChange}/>
</div>
<div className="form_control">
    <label htmlFor="">Full Name</label>
    <input type="text" name='fullName' value={user ? user.fullName : ''} onChange={handleChange}/>
</div>

<div className="form_control">
    <label htmlFor="">Address</label>
    <input type="text" name='address' value={user ? user.address : ''} onChange={handleChange}/>
</div>
<button className="create" onClick={handleSubmit} disabled={isAdding}>Create</button>

    </form>
    {isAdding && <Modal>
        <span>User created</span>
    </Modal>}
   </div>
  )
}

export default NewUser