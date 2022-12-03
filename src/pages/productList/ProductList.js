import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './product_list.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const columns= [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'product', headerName: 'Product', width: 130 },
  { field: 'stock', headerName: 'Stock', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
  
    width: 90,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 160,
  
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 160,
    renderCell: (params) => {
      return <>
        <Link to='/products/:id' className='product_edit'>Edit</Link>
        <DeleteOutlineIcon className='product_delete'/>
      </>
    }
  
  },
];


const rows = [
  { id: 1, product: 'Nike Hoodie', stock: 243, status:'active', price: `$ 423`  },
  { id: 1, product: 'Nike Hoodie', stock: 243, status:'active', price: `$ 423`  },
  { id: 1, product: 'Nike Hoodie', stock: 243, status:'active', price: `$ 423`  },
  { id: 1, product: 'Nike Hoodie', stock: 243, status:'active', price: `$ 423`  },
  { id: 1, product: 'Nike Hoodie', stock: 243, status:'active', price: `$ 423`  },
 
];


const ProductList = () => {
  return (
   <div className="product_list">
     <div style={{ height: 400, width: '100%' }} className='table'>
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