import React from "react";
import "./topbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@mui/material";

const Topbar = ({ isSidebarOpen, handleSidebar }) => {
  return (
    <>
      <div className="topbar">
        {/* left */}
        <div className="left" onClick={handleSidebar}>
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        {/* center  */}
        <div className="center">
          <div className="logo">myAdmin</div>
        </div>
        {/* right  */}
        <div className="right">
          <div className="topbar_icons">
          <Link to='/login'>Login</Link>
            <span>
              <NotificationsNone />
            </span>
            <span>
              <LanguageIcon />
            </span>
            <span>
              <SettingsIcon />
            </span>

            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
