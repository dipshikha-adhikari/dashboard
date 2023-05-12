import React, { useContext } from "react";
import { datas } from "./data";
import "./sidebar.css";
import { Link } from "react-router-dom";
import SidebarLinks from "./SidebarLinks";
import {CalendarMonthIcon,SettingsIcon,AccountCircleIcon} from '../../assets/icons'
import { context } from "../../context";


const Sidebar = () => {
  const{state,dispatch} = useContext(context)


  return (
    <>
      <div className="sidebar_wrapper">
    <div className="top">
    {datas.map((data, index) => {
        return <SidebarLinks key={data.title} props={data} />;
      })}
    </div>
    <div className="bottom">
   <Link to='/calendar' className="btm_link" onClick={() => dispatch({type:'CLOSE_SIDEBAR'})}><CalendarMonthIcon/> Calendar</Link>
   <Link to='/setting'  className="btm_link" onClick={() => dispatch({type:'CLOSE_SIDEBAR'})}><SettingsIcon/> Setting</Link>
   <Link  to='/account' className="btm_link" onClick={() => dispatch({type:'CLOSE_SIDEBAR'})}><AccountCircleIcon/> Account</Link>
  </div>
  </div>
  </>
  );
};

export default Sidebar;
