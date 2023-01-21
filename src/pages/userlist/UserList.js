import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

import "./userlist.css";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 50 },

  {
    field: "user",
    headerName: "User",
    minWidth: 150,
    flex: 1,

    renderCell: (params) => {
      return (
        <div className="userlist_user">
          <img src={params.row.avatar} alt="img" className="userlist_image" />
           {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",

    width: 110,
  },
  {
    field: "transction",
    headerName: "Transction",
    width: 110,
  },
  {
    field: "action",
    headerName: "Action",
    width: 110,
    renderCell: (params) => {
      return (
        <>
          <Link to="/userlist/:id" className="userlist_edit">
            Edit
          </Link>
          <DeleteIcon className="userlist_delete" />
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    username: "Sanie Fuse",
    avatar:
      "https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=",
    email: "sane@gmail.com",
    status: "active",
    transction: "$423",
  },
  {
    id: 2,
    username: "Sanie Fuse",
    avatar:
      "https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=",
    email: "sane@gmail.com",
    status: "active",
    transction: "$423",
  },
  {
    id: 3,
    username: "Sanie Fuse",
    avatar:
      "https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=",
    email: "sane@gmail.com",
    status: "active",
    transction: "$423",
  },
  {
    id: 4,
    username: "Sanie Fuse",
    avatar:
      "https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=",
    email: "sane@gmail.com",
    status: "active",
    transction: "$423",
  },
  {
    id: 5,
    username: "Sanie Fuse",
    avatar:
      "https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=",
    email: "sane@gmail.com",
    status: "active",
    transction: "$423",
  },
];

export default function DataGridDemo() {
  return (
    <Box className="userlist_table">
      <DataGrid
        style={{ width: "100%" }}
        rows={rows}
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
