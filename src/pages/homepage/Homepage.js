import React from 'react'
import './homepage.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import { useGlobalContext } from '../../context'

const Homepage = () => {

  const{isSidebarOpen} = useGlobalContext()

  

  return (
  <div className="homepage">

   <div className="home_content">
 <Chart/>
 {/* <h2>Chat will be here</h2> */}
    <Featured/>
   </div>
  </div>
  )
}

export default Homepage