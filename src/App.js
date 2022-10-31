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
const App = () => {
  const { isSidebarOpen } = useGlobalContext();

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
        >
    
         
          <Routes>
          <Route  path="/" element={<Homepage />} />
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
