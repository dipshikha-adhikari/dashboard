import React, { useState } from "react";
import "./homepage.css";
import Widget from "../../components/widget/Widget";
import Table from '../../components/table/Table'
import { userData } from '../../components/utils/data';


const Homepage = () => {
 
  return (
    <div className="homepage">
     <div className="heading">
     <h2>Dashboard</h2>
    <div className="date">
    <select name="" id="">
     <option value="3/22/2023">3/22/2023</option>
     </select>
     <button>Export</button>
    </div>
     </div>
        <Widget/>
      <div className='orders'>
<h2>Recent orders</h2>
      <Table data={userData}/>
        </div>
        
    </div>
  );
};

export default Homepage;
