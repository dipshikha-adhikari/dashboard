import React from "react";
import { datas } from "./data";
import "./sidebar.css";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
const Sidebar = () => {
const {isSidebarOpen} = useGlobalContext()

  return (
<>
      {datas.map((data, index) => {
        const { dashboard, quickmenu, notifications, staff } = data;
        return (
          <div className="sidebar_wrapper " key={index}>
            <div className="sidebar_links">
              <span className="sidebar_title">Dashboard</span>
              {dashboard.map((item, index) => {
                return (
                 <>
                   <Link to={item.link} key={index} className='sidebar_link'>
                
                    <span>{item.icon}</span>
                    <span>{item.name}</span>

               
                   </Link>
                
                 </>
            
                );
              })}
            </div>

            <div className="sidebar_links">
              <span className="sidebar_title">Quick Menu</span>
              {quickmenu.map((item, index) => {
                return (
                  <Link to={`/${item.link}`}  key={index} className='sidebar_link'>
                
                    <span>{item.icon}</span>
                    <span>{item.name}</span>

               
                   </Link>
                );
              })}
            </div>

            <div className="sidebar_links">
              <span className="sidebar_title">Notifications</span>
              {notifications.map((item, index) => {
                return (
                  <Link to={`/${item.link}`} key={index} className='sidebar_link'>
                
                    <span>{item.icon}</span>
                    <span>{item.name}</span>

               
                   </Link>
                );
              })}
            </div>

            <div className="sidebar_links">
              <span className="sidebar_title">Staff</span>
              {staff.map((item, index) => {
                return (
                  <li key={index} to={`/${item.link}`} className='sidebar_link'>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>

                  </li>
                );
              })}
            </div>
          </div>
        );
        {
          /* end of sidebar wrapper  */
        }
      })}
</>
  );
};

export default Sidebar;
