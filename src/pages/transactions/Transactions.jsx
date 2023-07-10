import React, { useContext } from "react";
import {Table} from 'antd'
import { Input, Select } from "antd";
import { context } from "../../context";
import { transactionsColumns } from "../../data";

const Transactions = () => {
  const { Option } = Select;
  const { state, dispatch } = useContext(context);
  const filteredData = state.filteredData;

  const handleNameSearch = (e) => {
    dispatch({ type: "FILTER_BY_NAME", payload: e.target.value.toLowerCase() });
  };

  const handleSelectChange = (e) => {
    dispatch({ type: "FILTER_BY_STATUS", payload: e });
  };
  return (
    <div className="orders" style={{ padding: "10px" }}>
      <h2 className="heading">Orders</h2>
      <div className="table">
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
        <Table dataSource={filteredData} columns={transactionsColumns} scroll={{ x: true }}  pagination={{ pageSize: 5 }}/>
      </div>
    </div>
  );
};

export default Transactions
