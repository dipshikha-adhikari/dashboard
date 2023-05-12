import React, { useContext, useState } from 'react'
import './product.css'
import {context} from '../../context'
import Modal from '../../components/modal/Modal'
const NewProduct = () => {
const[isAdding, setIsAdding] = useState(false)
const{state,dispatch} = useContext(context)

const[product, setProduct] = useState({
   id:new Date().getUTCMilliseconds(),
   title:'',
  price:'',
   inStock:'true',
   img:''
   
})
   const resetForm = () =>{
    setProduct({
      id:'',
      title:'',
     price:'',
      inStock:'',
      img:''
    })
   }
const handleChange = (e) => {
   setProduct({...product, [e.target.name]: e.target.value, id:new Date().getUTCMilliseconds()})
   }
   const handleFile = (e) => {
let url = URL.createObjectURL(e.target.files[0])
setProduct({...product,img:url})
   }
   const handleSubmit = (e) => {
       e.preventDefault()
      if(product.id !== ''){
         dispatch({
            type:'ADD_PRODUCT',
            payload:product
        })
        setIsAdding(true)
        setTimeout(() => {
    setIsAdding(false)
    resetForm()
        },2000)
      }
   }

   
  return (
  <div className="new_product">
    <h3 className='heading'>New Product</h3>
    <form action="" onSubmit={handleSubmit}>
     <div className="form_control">
     <label htmlFor="">Image</label>
        <input type="file" name='file' onChange={handleFile} />
     </div>
     <div className="form_control">
     <label htmlFor="">Title</label>
        <input type="text" name='title' value={product ? product.title : ''} onChange={handleChange} required={true}/>
     </div>
     <div className="form_control">
     <label htmlFor="">Price</label>
        <input type="number" name='price' value={product ? product.price : ''}  onChange={handleChange} required={true}/>
     </div>
     <div className="form_control">
     <label htmlFor="">In Stock</label>
     <select  className='select'  onChange={handleChange}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
     </select>
     </div>

     <button className="create_btn" type='submit' disabled={isAdding}>Create</button>
    </form>
    {isAdding && <Modal>
      <span>Product added</span>
    </Modal>}
  </div>
  )
}

export default NewProduct