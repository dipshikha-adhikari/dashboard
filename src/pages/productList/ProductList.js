import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './product_list.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const columns= [
  { field: 'id', headerName: 'ID',  minWidth: 130, flex:1 },
  { field: 'product', headerName: 'Product', minWidth: 130, flex:1 },
  { field: 'stock', headerName: 'Stock', width: 70 },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  
  },
  {
    field: 'action',
    headerName: 'Action',
    minWidth: 130, flex:1,
    renderCell: (params) => {
      return <>
        <Link to='/products/:id' className='product_edit'>Edit</Link>
        <DeleteOutlineIcon className='product_delete'/>
      </>
    }
  
  },
];


const rows = [
  { id: 121, product: 'Nike Hoodie', stock: 243, status:'active', price: `$ 423`  },
  { id: 122, product: 'Nike Hoodie', stock: 243, status:'active', price: `$ 423`  },
  { id: 123, product: 'Nike Hoodie', stock: 243, status:'active', price: `$ 423`  },
  { id: 124, product: 'Nike Hoodie', stock: 243, status:'active', price: `$ 423`  },
  { id: 125, product: 'Nike Hoodie', stock: 243, status:'active', price: `$ 423`  },
 
];


const ProductList = () => {
  return (
   <div className="product_list">
     <div style={{ height: 400 }} className='table'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
   </div>
  )
}

export default ProductList