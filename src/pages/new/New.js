import React from 'react'
import './new.css'


const New = () => {


  return (
   <div className="new_user">
   <h3 className='header'>New User</h3>
    <form action="">
    {/* left  */}
    <div className="left">
<div className="form_control">
    <label htmlFor="">Username</label>
    <input type="text" placeholder='biv ak' />
</div>
<div className="form_control">
    <label htmlFor="">Email</label>
    <input type="text" placeholder='biv@gmail.com'/>
</div>
<div className="form_control">
    <label htmlFor="">Phone</label>
    <input type="number" placeholder='977 9807500000' />
</div>
<div className="form_control gender">
    <label htmlFor="">Gender</label>
   <div className="options">
 <span>  <input type="radio" name="gender" value="male" /> Male</span>
<span><input type="radio" name="gender" value="female" /> Female</span>
<span><input type="radio" name="gender" value="other" /> Other</span>
   </div>
</div>
</div>
{/* right  */}
<div className="right">
<div className="form_control">
    <label htmlFor="">Full Name</label>
    <input type="text" placeholder='John Smith' />
</div>
<div className="form_control">
    <label htmlFor="">Password</label>
    <input type="text" placeholder='password' />
</div>
<div className="form_control">
    <label htmlFor="">Address</label>
    <input type="text" placeholder='New Baneshword | KTM' />
</div>
<div className="form_control active_status">
    <label htmlFor="">Active</label>
    <select className='select '>
        <option value="yes" className='option'>Yes</option>
        <option value="no" className='option'>No</option>
    </select>
</div>
<button className="create">Create</button>
</div>
    </form>
   </div>
  )
}

export default New