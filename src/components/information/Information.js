import React from "react";
import "./information.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Information = () => {

  return (
    <div className="information">
      <div className="new_members">
        <h2 className="heading">New Members</h2>
        <div className="member">
          <img
            src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="image"
          />
          <div className="title">
            <span>Biv Morrison</span> <span>Web developer</span>
          </div>
          <div className="more">
            <RemoveRedEyeIcon /> Display
          </div>
        </div>

        <div className="member">
          <img
            src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="image"
          />
          <div className="title">
            <span>Biv Morrison</span> <span>Web developer</span>
          </div>
          <div className="more">
            <RemoveRedEyeIcon /> Display
          </div>
        </div>
        <div className="member">
          <img
            src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="image"
          />
          <div className="title">
            <span>Biv Morrison</span> <span>Web developer</span>
          </div>
          <div className="more">
            <RemoveRedEyeIcon /> Display
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
