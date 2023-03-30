import React, { useState } from "react";
import "./homepage.css";
import Widget from "../../components/widget/Widget";
import Table from '../../components/table/Table'
import { orderColumns, orderData, salesColumns, salesData } from '../../components/utils/data';
import PieChart from "../../components/pieChart";


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
<h4 className="heading">Recent orders</h4>
      <Table data={orderData} columns={orderColumns}/>
        </div>
        <div className="most_sales">
          <h4 className="heading">Most sold items</h4>
          <div className="data">
         <div className="chart">
         <PieChart/>
         </div>
         <Table data={salesData} columns={salesColumns} />
       
       
          </div>
        </div>
    </div>
  );
};

export default Homepage;
