import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./product_list.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";




const ProductList = () => {



  function handleDelete(id) {

  }


  const columns = [
    { field: "_id", headerName: "ID", minWidth: 130, flex: 1 },
    {
      field: "img",
      headerName: "Product",
      renderCell: (params) => {
        return <img src={params.row.img} className="product_image" alt="" />;
      },
    },
    { field: "title", flex: 1, headerName: "Title" },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 130,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row._id}`} className="product_edit">
              Edit
            </Link>
            <DeleteOutlineIcon
              className="product_delete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];


 
  return (
    <div className="product_list">
      <div style={{ height: "500px" }} className="table">
        {/* <DataGrid
          rows={products}
          width={100}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={4}
          rowsPerPageOptions={[4]}
          checkboxSelection
          rowHeight={100}
      
        /> */}
      </div>
    </div>
  );
};

export default ProductList;
