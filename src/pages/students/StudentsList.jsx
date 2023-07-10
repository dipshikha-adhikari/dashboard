import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "./student.css";
import { Link } from "react-router-dom";
import { context } from "../../context";

 
export default function StudentsList() {
  const {state,dispatch} = React.useContext(context)
  const {students} = state 

  const columns = [
    { field: "id", headerName: "ID", minWidth: 50},

    { field: "rollNo", headerName: "Roll No", minWidth: 100, flex:1 },
  
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 1,
  
    },
    {
      field: "class",
      headerName: "Class",
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
      field: "parent",
      headerName: "Parent",
      minWidth: 150,
      flex: 1,
    },
    
    {
      field: "action",
      headerName: "Action",
      minWidth: 150,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/students/edit/${params.row.id}`} className="edit">
              Edit
            </Link>
            <DeleteIcon className="delete" onClick={() => handleDelete(params.row.id)}/>
          </>
        );
      },
    },
  ];

function handleDelete(id){
  dispatch({
    type:'DELETE_STUDENT',
    payload:id
  })
}
  return (
    <Box className="students_table">
      <DataGrid
        style={{ width: "100%" }}
        rows={students}
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
