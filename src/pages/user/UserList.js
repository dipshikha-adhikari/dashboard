import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

import "./user.css";
import { Link } from "react-router-dom";
import { context } from "../../context";



 
export default function DataGridDemo() {
  const {state,dispatch} = React.useContext(context)
  const {users} = state 

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
  
    {
      field: "username",
      headerName: "Username",
      minWidth: 150,
      flex: 1,
  
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 150,
      flex: 1,
    
    },
    {
      field: "fullName",
      headerName: "Fullname",
      minWidth: 150,
      flex: 1,
    },
    
    {
      field: "address",
      headerName: "Address",
      minWidth: 150,
      flex: 1,
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 110,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/userlist/edit/${params.row.id}`} className="userlist_edit">
              Edit
            </Link>
            <DeleteIcon className="userlist_delete" onClick={() => handleDelete(params.row.id)}/>
          </>
        );
      },
    },
  ];

function handleDelete(id){
  dispatch({
    type:'DELETE_USER',
    payload:id
  })
}
  return (
    <Box className="userlist_table">
      <DataGrid
        style={{ width: "100%" }}
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
