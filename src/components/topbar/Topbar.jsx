import React, { useContext } from "react";
import "./topbar.css";
import {
  SettingsIcon,
  NotificationsNone,
  LanguageIcon,
  MenuIcon,
  CloseIcon,
} from "../../assets/icons";
import { Link } from "react-router-dom";
import { context } from "../../context";

const Topbar = () => {
  const { state, dispatch } = useContext(context);

  function handleMenu() {
    state.isSidebarOpen
      ? dispatch({ type: "CLOSE_SIDEBAR" })
      : dispatch({ type: "OPEN_SIDEBAR" });
  }

  return (
    <>
      <div
        className="topbar"
        onClick={() => {
          state.isSidebarOpen && dispatch({ type: "CLOSE_SIDEBAR" });
        }}
      >
        {/* left */}
        <div className="left" >
          <Link to='/' className="logo">SMS</Link>
      <span className="menu_icon" onClick={handleMenu}>    {state.isSidebarOpen ? <CloseIcon /> : <MenuIcon className="menu" /> } </span>
        </div>


        {/* right  */}
        <div className="right">
          <div className="topbar_icons">
            <Link to="/login" className="login">
              {/* login */}
            </Link>

            <Link to="/notifications">
              <NotificationsNone />
            </Link>

            <Link to="/language">
              <LanguageIcon />
            </Link>

            <Link to="/setting">
              <SettingsIcon />
            </Link>

            <Link to="/account">
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
