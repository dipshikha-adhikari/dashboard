import React from "react";
import { datas } from "./data";
import "./sidebar.css";
import { Link } from "react-router-dom";
import SidebarLinks from "./SidebarLinks";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = ({ closeSidebar }) => {
  return (
    <>
      <div className="sidebar_wrapper">
    <div className="top">
    {datas.map((data, index) => {
        return <SidebarLinks key={data.title} props={data}  closeSidebar={closeSidebar}/>;
      })}
  
    </div>
    <div className="bottom">
   <Link to='/calendar' className="btm_link" onClick={closeSidebar}><CalendarMonthIcon/> Calendar</Link>
   <Link to='/setting'  className="btm_link" onClick={closeSidebar}><SettingsIcon/> Setting</Link>
   <Link  to='/account' className="btm_link" onClick={closeSidebar}><AccountCircleIcon/> Account</Link>
  </div>
  </div>
  </>
  );
};

export default Sidebar;
