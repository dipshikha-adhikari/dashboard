import React from "react";
import { Table } from "antd";

const App = ({ data, columns }) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        scroll={{ x: true }}
      />
    </>
  );
};

export default App;
