import React from "react";
import "./information.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Information = () => {
  const Button = ({ type }) => {
    return <span className={`button_${type}`}>{type}</span>;
  };

  return (
    <div className="information">
      <div className="members">
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

        <div className="latest_tsx">
          <div className="heading">Latest Transcations</div>
          <table>

      
            <thead>
              <tr>
                <td>Customer</td>
                <td>Date</td>
                <td>Amount</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="customer">
                  <img
                    src="https://media.istockphoto.com/photos/portrait-of-a-happy-young-girl-with-a-smiling-face-picture-id1315976559?b=1&k=20&m=1315976559&s=170667a&w=0&h=YZ-H6Q62Xmw17X3iLusCxlyXHiG5TY1IGSXY5y1UJ7g="
                    alt=""
                  />
                  <h4>Jessi Agrawal</h4>
                </td>
                <td>10 Oct 2022</td>
                <td>$423</td>
                <td>
                  <Button type="Declined" />{" "}
                </td>
              </tr>

              <tr>
                <td className="customer">
                  <img
                    src="https://media.istockphoto.com/photos/portrait-of-a-happy-young-girl-with-a-smiling-face-picture-id1315976559?b=1&k=20&m=1315976559&s=170667a&w=0&h=YZ-H6Q62Xmw17X3iLusCxlyXHiG5TY1IGSXY5y1UJ7g="
                    alt=""
                  />
                  <h4>Jessi Agrawal</h4>
                </td>
                <td>10 Oct 2022</td>
                <td>$423</td>
                <td>
                  <Button type="Pending" />{" "}
                </td>
              </tr>

              <tr>
                <td className="customer">
                  <img
                    src="https://media.istockphoto.com/photos/portrait-of-a-happy-young-girl-with-a-smiling-face-picture-id1315976559?b=1&k=20&m=1315976559&s=170667a&w=0&h=YZ-H6Q62Xmw17X3iLusCxlyXHiG5TY1IGSXY5y1UJ7g="
                    alt=""
                  />
                  <h4>Jessi Agrawal</h4>
                </td>
                <td>10 Oct 2022</td>
                <td>$423</td>
                <td>
                  <Button type="Approved" />{" "}
                </td>
              </tr>

              <tr>
                <td className="customer">
                  <img
                    src="https://media.istockphoto.com/photos/portrait-of-a-happy-young-girl-with-a-smiling-face-picture-id1315976559?b=1&k=20&m=1315976559&s=170667a&w=0&h=YZ-H6Q62Xmw17X3iLusCxlyXHiG5TY1IGSXY5y1UJ7g="
                    alt=""
                  />
                  <h4>Jessi Agrawal</h4>
                </td>
                <td>10 Oct 2022</td>
                <td>$423</td>
                <td>
                  <Button type="Approved" />{" "}
                </td>
              </tr>
              
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Information;
