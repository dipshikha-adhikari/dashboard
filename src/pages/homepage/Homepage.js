import React, { useContext } from "react";
import "./homepage.css";
import Widget from "../../components/widget/Widget";
import Table from '../../components/table/Table'
import { orderColumns,  salesColumns, salesData } from '../../components/utils/data';
import PieChart from "../../components/pieChart";
import {  Input, Select } from "antd";
import { context } from "../../context";


const Homepage = () => {
 const{Option} = Select
 const{state, dispatch} = useContext(context)
const filteredData = state.filteredData

 const handleNameSearch = (e) => {
dispatch({type:'FILTER_BY_NAME', payload:e.target.value.toLowerCase()})
 }

 const handleSelectChange = (e) => {
dispatch({type:'FILTER_BY_STATUS', payload: e})
 }
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
<Input
          placeholder="Search by name"
          onChange={handleNameSearch}
          style={{ width: 200, border: "1px solid green" }}
        />
        <Select
          placeholder="filter by status"
          onChange={handleSelectChange}
          style={{
            width: 150,
            border: "1px solid green",
            borderRadius: "5px",
            outline: "none",
            margin: "2px",
          }}
        >
          <Option value="all">All</Option>
          <Option value="completed">Completed</Option>
          <Option value="canceled">Canceled</Option>
          <Option value="pending">Pending</Option>
        </Select>
      <Table data={filteredData} columns={orderColumns}/>
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
