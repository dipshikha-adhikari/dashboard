import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import './product.css'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { context } from "../../context";




const ProductList = () => {
  const { state,dispatch } = useContext(context)
  const { products } = state


  const columns = [
    {
      field: "id", headerName: "ID", 
      flex: 1,
      minWidth:100
    },{
      field: "title", flex: 1, headerName: "Title", 
      minWidth:100
    
    },
    {
      field: "img",
      headerName: "Product",
      flex:1,
      minWidth:100,

      renderCell: (params) => {
        return <img src={params.row.img} className="product_image"  alt="image" />;
      },
    },
    
    {
      field: "price",
      headerName: "Price(In Dollars)",
flex:1,
    },
    {
      field: "inStock",
      headerName: "inStock",
// flex:1,
    },
    {
      field: "action",
      headerName: "Action",
    minWidth:170,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/edit/${params.row.id}`} className="product_edit">
              Edit
            </Link>
            <DeleteOutlineIcon
              className="product_delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

function handleDelete(id){
  dispatch({
    type:'DELETE_PRODUCT',
    payload:id
  })
}

  return (
    <div className="product_list">
      <div style={{ height: "500px" }} className="table">
        <DataGrid
          rows={products}
          width={100}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[4]}
          checkboxSelection
          rowHeight={100}

        />
      </div>
    </div>
  );
};

export default ProductList;
