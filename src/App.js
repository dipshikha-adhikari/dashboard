import React, { useContext } from "react";
import "./index.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Student, Teacher, StudentsList, NewStudent,Transactions, EditStudent, EditTeacher, NewTeacher, TeachersList, Homepage, Login } from "./pages";
import { Calendar, Error, Sidebar, Topbar } from "./components";
import { context } from "./context";


const App = () => {
  const { state, dispatch } = useContext(context)

  return (
    <>
      <div className="app ">
        <Topbar
        />
        <div className="app_main" >
          <div
            className={`${state.isSidebarOpen
              ? "sidebar_container_active sidebar_container"
              : "sidebar_container"
              }`}
          >
            <Sidebar />
          </div>
          <div
            className={`${state.isSidebarOpen ? "push_other_content" : "other_content"
              }`}
            onClick={() => dispatch({ type: 'CLOSE_SIDEBAR' })}
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/students/new" element={<NewStudent />} />
              <Route path="/teachers/new" element={<NewTeacher />} />
              <Route path="/teachers" element={<TeachersList />} />
              <Route path="/teachers/:id" element={<Teacher />} />
              <Route path="/teachers/edit/:id" element={<EditTeacher />} />
              <Route path="/students" element={<StudentsList />} />
              <Route path="/students/:id" element={<Student />} />
              <Route path="/students/edit/:id" element={<EditStudent />} />
              <Route path="/students/new" element={<NewStudent />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;


const Account = () => {
  return <div style={{ textAlign: 'center', padding: '2rem' }}>
    <span>You are not registered 😐</span>
  </div>
}


