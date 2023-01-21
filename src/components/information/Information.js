import React, { useEffect, useState } from "react";
import "./information.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { userRequest } from "../../requestMethods";
import moment from 'moment'
import { Link } from "react-router-dom";
const Information = () => {
  const [users, setUsers] = useState([]);
const[orders, setOrders] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await userRequest.get("api/v1/users");
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
 const getOrders = async() => {
  const response = await userRequest.get('api/v1/orders')
  try{
    setOrders(response.data)
  }catch(err){
    console.log(err)
  }
 }
 getOrders()
  },[])
  return (
    <div className="information">
    {/* new members  */}
      <div className="new_members">
        <h2 className="heading">New Members</h2>
        {users.map((user) => {
          return (
            <div className="member" key={user._id}>
              <img
                src={user.image}
                alt="image"
              />
              <div className="title">
                <span>{user.username}</span>
              </div>
              <div className="more">
              <Link to={`/userlist/${user._id}`}>  <RemoveRedEyeIcon /> </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* latest transaction */}
      <div className="latest_tsx">
        <div className="heading">Latest Transactions</div>
        <div className="table">
          <div className="row table_head">
          <h4>  Customer</h4>
          <h4>  Date</h4>
          <h4>Amount </h4>
          <h4>  Status</h4>
            
        </div>
         {orders.map(order => {
          return  <div className="row table_body" key={order._id}>
            <div className="user_title">{order.userId}</div>
            <div className="col">{moment(`${order.createdAt}`).fromNow()}</div>
            <div className="col">{order.amount}</div>
            <div className="status">
              <span>{order.status}</span>
            </div>
        </div>
         })}
      </div>
    </div>
    </div>
  );
};

export default Information;
