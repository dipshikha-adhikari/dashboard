import React from "react";
import "./homepage.css";
import Chart from "../../components/chart/Chart";
import Featured from '../../components/featured/Featured'
import Information from '../../components/information/Information'
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="home_content">
        <Chart />
        <Featured/>
        <Information/>
      </div>
    </div>
  );
};

export default Homepage;
