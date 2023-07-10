import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./teacher.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { context } from "../../context";

const TeachersList = () => {
  const { state, dispatch } = useContext(context);
  const { teachers } = state;


  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      minWidth: 50,
    },
    {
      field: "name",
      flex: 1,
      headerName: "Name",
      minWidth: 100,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      minWidth: 100,

      renderCell: (params) => {
        return (
          <img src={params.row.image} className="teacher_image" alt="image" />
        );
      },
    },

    {
      field: "periods",
      headerName: "Periods",
      minWidth: 50,

    },
    {
      field: "subjects",
      headerName: "Subjects",
      flex: 1,
      minWidth:150
    },
    {
      field: "classes",
      headerName: "Classes",
      flex: 1,
      minWidth:100

    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 170,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={`/teachers/edit/${params.row.id}`}
              className="teacher_edit"
            >
              Edit
            </Link>
            <DeleteOutlineIcon
              className="teacher_delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  function handleDelete(id) {
    dispatch({
      type: "DELETE_TEACHER",
      payload: id,
    });
  }

  return (
    <div className="teachers_list">
      <div style={{ height: "500px" }} className="table">
        <DataGrid
          // style={{ width: "100%" }}
          rows={teachers}
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

export default TeachersList;
