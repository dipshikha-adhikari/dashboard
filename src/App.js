import React, { useRef } from "react";
import "./index.css";
import { useState, useEffect } from "react";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Sidebar from "./components/sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import EditUser from "./pages/user/EditUser";
import EditProduct from "./pages/product/EditProduct";
import Login from "./pages/login/Login";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/new_product/NewProduct";
import NewUser from "./pages/new_user/NewUser";
import Product from "./pages/product/Product";
import User from "./pages/user/User";

const Account = () => {
  return <div style={{textAlign:'center',padding:'2rem', fontSize:'1.5rem'}}>
    <span>You are not registered 😐</span>
  </div>
}
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  
  const handleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  };



  return (
    <>
      <div className="app ">
        <Topbar
          isSidebarOpen={isSidebarOpen}
          handleSidebar={handleSidebar}
          closeSidebar={closeSidebar}
        />
        <div className="app_main" >
          <div
            className={`${
              isSidebarOpen
                ? "sidebar_container_active sidebar_container"
                : "sidebar_container"
            }`}
          >
            <Sidebar closeSidebar={closeSidebar} />
          </div>
          <div
            className={`${
              isSidebarOpen ? "push_other_content" : "other_content"
            }`}
            onClick={closeSidebar}
          >
            <Routes>
            <Route path="/" exact element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/new_product" element={<NewProduct />} />
              <Route path="/new_user" element={<NewUser />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/userlist/:userId" element={<User/>} />
              <Route path="/userlist/edit/:userId" element={<EditUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="/products/edit/:productId" element={<EditProduct />} />
              <Route path="/product/newProduct" element={<NewProduct />} />
            </Routes>
 
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
