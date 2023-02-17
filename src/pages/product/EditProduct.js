import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './product.css'
import { context } from '../../context';
import Modal from '../../components/modal/Modal';
import {useNavigate} from 'react-router-dom'

const EditProduct = () => {
 const{state, dispatch} = useContext(context)
 const[product, setProduct] = useState()
 const[isUpdating, setIsUpdating] = useState(false)
 const id = parseInt(useParams().productId )
 const navigate = useNavigate()

 useEffect(() => {
state.products.map(p => {
    if (p.id === id){
        setProduct(p)
    }
})
 },[id])

 const handleChange = (e) => {
setProduct({...product, [e.target.name]:e.target.value})
 }
const handleFile = (e) => {
let url = URL.createObjectURL(e.target.files[0])
setProduct({...product, img:url})
}
const handleSubmit = (e) => {
    e.preventDefault()
dispatch({
    type:'EDIT_PRODUCT',
    payload:product 
})

setIsUpdating(true)
setTimeout(() => {
    setIsUpdating(false)
    navigate('/products')
},2000)
}
  return (
  <div className="product">
   
   
   <form action="" onSubmit={handleSubmit}>
   <div className="form_control">
        <label htmlFor="">Title</label>
        <input type="text" name='title' value={product ? product.title : ''}  onChange={handleChange} required={true}/>
    </div>
    <div className="form_control">
        <label htmlFor="">Price</label>
        <input type="text" name='price' value={product ? product.price : ''} onChange={handleChange} required={true}/>
    </div>
    <div className="form_control">

        <label htmlFor="">Image</label>
        <img src={product ? product.img : ''} alt=""  />

        <input type="file" name='file' accept='/image/*' onChange={handleFile} />
    </div>
       <div className='form_control'>
       <label htmlFor="">In Stock</label> 
       {product && product.inStock === 'yes' ? <select  className='select' name='inStock' onChange={handleChange} >
        <option value="yes">Yes</option>
        <option value="no">No</option>
       </select> : <select  className='select' name='inStock' onChange={handleChange} >
       <option value="no">No</option>

        <option value="yes">Yes</option>
       </select> }
        </div>
<button className="update_btn" type='submit' disabled={isUpdating}>Update</button>

   </form>
   {isUpdating &&  <Modal>
        <span>Product updated</span>
    </Modal>}
    
  </div>
  )
}

export default EditProduct