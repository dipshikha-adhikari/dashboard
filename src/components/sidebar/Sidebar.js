import React from "react";
import { datas } from "./data";
import "./sidebar.css";
import { Link } from "react-router-dom";
import SidebarLinks from "./SidebarLinks";

const Sidebar = ({ handleSidebar }) => {
  return (
    <div className="sidebar_wrapper">
      {datas.map((data, index) => {
        return <SidebarLinks key={data.title} props={data}  handleSidebar={handleSidebar}/>;
      })}
    </div>
  );
};

export default Sidebar;
