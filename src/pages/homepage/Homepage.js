import React from "react";
import "./homepage.css";
import Featured from '../../components/featured/Featured'
import UserChart from "../../components/chart/UserChart";
import ProductChart from "../../components/chart/ProductChart";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="home_content">
      <UserChart/>
     <div className="chart_and_featured">
     <ProductChart/>
        <Featured/>
     </div>
      </div>
    </div>
  );
};

export default Homepage;
