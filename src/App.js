import React from "react";
import "./index.css";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Sidebar from "./components/sidebar/Sidebar";
import { useGlobalContext } from "./context";
import Information from "./components/information/Information";
import {BrowserRouter as Router,Routes,Switch, Route} from 'react-router-dom'
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import New from "./pages/new/New";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/new_product/NewProduct";
import Login from "./pages/login/Login"
import { useEffect, useState } from "react";
const App = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
const[startX, setStartX] = useState(0)
const[endX, setEndX] = useState(0)

  function handleClick(){
    isSidebarOpen && setIsSidebarOpen(false)
  }
  function handleTouchStart(e){
setStartX(e.changedTouches[0].screenX)
  }

  function handleTouchEnd(e){
setEndX(e.changedTouches[0].screenX)
  }
  useEffect(() => {
    if(endX < startX){
      console.log('left')
    }
isSidebarOpen && startX > endX && setIsSidebarOpen(false)
  },[startX, endX])
  return (
    <>

   <div className="app ">
        <Topbar />
       <div className="app_main">
       <div
          className={`${isSidebarOpen
              ? "sidebar_container_active sidebar_container"
              : "sidebar_container"
            }`}
        >
          <Sidebar />
        </div>
        <div
          className={`${isSidebarOpen ? "push_other_content" : "other_content"
            }`}
            onClick={handleClick}
            onTouchEnd={handleTouchEnd}
            onTouchStart={handleTouchStart}
            
        >
    
         
          <Routes>
          <Route  path="/" element={<Homepage />} />
          <Route path='/login' element={<Login/>} />
          <Route path="/userlist" element={<UserList/> } />
        <Route path="/user/:userId" element={<User/>} />
        <Route path='/user/newUser' element={<New/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path='/products/:productId' element={<Product/>} />
        <Route path='/product/newProduct' element={<NewProduct/>} />
          </Routes>
      
          <Information/>
         
        </div>
       </div>
      </div>
 
  
    </>
  );
};

export default App;
