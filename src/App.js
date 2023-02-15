import React from "react";
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
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/new_product/NewProduct";
import Featured from "./components/featured/Featured";
import NewUser from "./pages/new_user/NewUser";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const navigate = useNavigate()
  const closeSidebar = () => setIsSidebarOpen(false);
  const handleSidebar = () => setIsSidebarOpen((prev) => !prev);


  return (
    <>
      <div className="app ">
        <Topbar
          isSidebarOpen={isSidebarOpen}
          handleSidebar={handleSidebar}
          closeSidebar={closeSidebar}
        />
        <div className="app_main">
          <div
            className={`${
              isSidebarOpen
                ? "sidebar_container_active sidebar_container"
                : "sidebar_container"
            }`}
          >
            <Sidebar handleSidebar={handleSidebar} />
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
              <Route path="/new_product" element={<NewProduct />} />
              <Route path="/new_user" element={<NewUser />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/userlist/:userId" element={<User />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="/product/newProduct" element={<NewProduct />} />
            </Routes>
 
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
