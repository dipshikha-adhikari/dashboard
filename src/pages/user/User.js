import React from "react";
import "./user.css";
import Person2Icon from "@mui/icons-material/Person2";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
const User = () => {
  return (
    <div className="user">
      
      <div className="user_container">
        {/* user profile  */}
        <div className="user_profile">
          <div className="header">
            <img
              src="https://media.istockphoto.com/photos/happy-young-indian-girl-with-headphones-looking-at-laptop-screen-picture-id1216915208?k=20&m=1216915208&s=170667a&w=0&h=YRS90hgsHE74os43ZKyXr5b4OREF96TXqt69C2tsx-Y="
              alt=""
            />

            <div className="title">
              <h5>Mari Quenda</h5>
              <span>Software Engineer</span>
            </div>
          </div>

          <h4>Account Status</h4>
          <div className="user_details">
            <span>
              <Person2Icon /> mariquen7
            </span>
            <span>
              <DateRangeIcon /> 12/17/1996
            </span>
            <span>
              <PhoneIphoneIcon /> +977 9807500000
            </span>
            <span>
              <MailOutlineIcon /> mariquen@gmail.com
            </span>
            <span>
              <LocationSearchingIcon /> New Baneshwor | KTM
            </span>
          </div>
        </div>

  {/* edit form */}
        <form action="">
          <h4 style={{color: 'var(--primary)'}}>Edit</h4>
          {/* left */}
          <div className="form_container">
            <div className="left">
              <div className="form_control">
                <label htmlFor="">Username</label>
                <input type="text" />
              </div>
              <div className="form_control">
                <label htmlFor="">Fullname</label>
                <input type="text" />
              </div>
              <div className="form_control">
                <label htmlFor="">email</label>
                <input type="email" />
              </div>
              <div className="form_control">
                <label htmlFor="">Phone</label>
                <input type="number" />
              </div>
              <div className="form_control">
                <label htmlFor="">Address</label>
                <input type="text" />
              </div>
            </div>
            {/*form right */}
            <div className="right">
              <div className="form_control">
                <img
                  src="https://media.istockphoto.com/photos/happy-young-indian-girl-with-headphones-looking-at-laptop-screen-picture-id1216915208?k=20&m=1216915208&s=170667a&w=0&h=YRS90hgsHE74os43ZKyXr5b4OREF96TXqt69C2tsx-Y="
                  alt=""
                />
                <input type="file" className="file" />
              </div>
              <button className="update">Update</button>
            </div>
          </div>
          {/* end  of form container  */}
        </form>
      </div>
    </div>
  );
};

export default User;
