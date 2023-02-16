import React from "react";
import "./topbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Topbar = ({ isSidebarOpen, handleSidebar, closeSidebar }) => {
  return (
    <>
      <div className="topbar" onClick={() => {
        isSidebarOpen && closeSidebar()
      }}>
        {/* left */}
        <div className="left" onClick={handleSidebar}>
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon className="menu" />}
        </div>
        {/* center  */}
        <div className="center">
          <div className="logo">myAdmin</div>
        </div>
        {/* right  */}
        <div className="right">
          <div className="topbar_icons">
          <Link to='/login' className="login">login</Link>
           <Link to='/notifications'>
              <NotificationsNone />
           </Link>
           <Link>
              <LanguageIcon />
           </Link>
           <Link>
              <SettingsIcon />
           </Link>

            <Link to='/account'>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
