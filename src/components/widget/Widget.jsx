import React, { useContext, useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import "./widget.css";
import { context } from "../../context";
import Chart from "../lineChart";
import { columns, data } from "./data";
import { Table } from "antd";
import { LineChart } from "..";
import { newStudents } from "../../data";

const Widget = () => {
  const { state } = useContext(context);
  const { students } = state;
  let studentDiffMonth = state.studentsCount - state.prevMonthStudentsCount;
  let studentDiffYear = state.studentsCount - state.prevYearStudentsCount;
  let courseDiff = state.courseCount - state.prevCourseCount;
  let studentDiffMonthPercent = Math.floor(
    (studentDiffMonth * 100) / state.studentsCount
  );
  let studentDiffYearPercent = Math.floor(
    (studentDiffYear * 100) / state.studentsCount
  );
  let courseDiffPercent = Math.floor((courseDiff * 100) / state.courseCount);

  return (
    <div className="widget">
      <section className="section_1">
        <div className="box">
          <span className="heading">
            {" "}
            Total Students
            <MoreVertIcon />
          </span>
          <h2 className="amount">{state.studentsCount}</h2>
          <div className="changes">
            <span className="green">
              <CallMadeIcon /> {studentDiffYearPercent}%
            </span>
            <span>Compared to last year</span>
          </div>
        </div>
        <div className="box">
          <span className="heading">
            {" "}
            New Students
            <MoreVertIcon />
          </span>
          <h2 className="amount"> {studentDiffMonth}</h2>
          <div className="changes">
            <span className={`${studentDiffMonth > 0 ? "green" : "red"} gray`}>
              <SouthEastIcon /> {studentDiffMonthPercent}%
            </span>
            <span>Compared to last moth</span>
          </div>
        </div>
        <div className="box">
          <span className="heading">
            {" "}
            Total Course
            <MoreVertIcon />
          </span>
          <h2 className="amount">{state.courseCount}</h2>
          <div className="changes">
            <span className={`${courseDiff > 0 ? "green" : "red"} gray`}>
              <SouthEastIcon /> {courseDiffPercent}%
            </span>
            <span>Compared to last month</span>
          </div>
        </div>
      </section>

      <section className="section_2">
        <div className="new_students">
          <h4 className="heading">New students</h4>
          <div className="students">
            {students.length !== 0 && (
              <Table
                columns={columns}
                dataSource={newStudents}
                scroll={{ x: true }}
                pagination={{ pageSize: 5 }}
              />
            )}
          </div>
        </div>

        <div className="chart">
          <h4 className="heading">Students Performance</h4>
          <LineChart />
        </div>
      </section>
    </div>
  );
};

export default Widget;
