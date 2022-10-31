import React from 'react'
import './new_product.css'

const NewProduct = () => {

  return (
  <div className="new_product">
    <h3 className='header'>New Product</h3>
    <form action="">
     <div className="form_control">
     <label htmlFor="">Image</label>
        <input type="file" />
     </div>
     <div className="form_control">
     <label htmlFor="">Name</label>
        <input type="text" placeholder='Nike Shoe' />
     </div>
     <div className="form_control">
     <label htmlFor="">Stock</label>
        <input type="number" placeholder='26'/>
     </div>
     <div className="form_control">
     <label htmlFor="">Active</label>
     <select  className='select'>
        <option value="yes">Yes</option>
        <option value="no">No</option>
     </select>
     </div>

     <button className="create_btn">Create</button>
    </form>
  </div>
  )
}

export default NewProduct