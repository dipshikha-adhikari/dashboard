import React, { useContext } from "react";
import "./index.css";

import {
  Routes,
  Route,
} from "react-router-dom";

import { Product, User, ProductList, NewProduct, EditProduct, EditUser, NewUser, UserList, Orders, Homepage, Login } from "./pages";
import { Calendar, Error, Sidebar, Topbar } from "./components";
import { context } from "./context";

const Account = () => {
  return <div style={{ textAlign: 'center', padding: '2rem', fontSize: '1.5rem' }}>
    <span>You are not registered 😐</span>
  </div>
}


const App = () => {
  const { state, dispatch } = useContext(context)



  return (
    <>
      <div className="app ">
        <Topbar

        />
        <div className="app_main" >
          <div
            className={`${state.isSidebarOpen
              ? "sidebar_container_active sidebar_container"
              : "sidebar_container"
              }`}
          >
            <Sidebar />
          </div>

          <div
            className={`${state.isSidebarOpen ? "push_other_content" : "other_content"
              }`}
            onClick={() => dispatch({ type: 'CLOSE_SIDEBAR' })}
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/new_product" element={<NewProduct />} />
              <Route path="/new_user" element={<NewUser />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/userlist/:userId" element={<User />} />
              <Route path="/userlist/edit/:userId" element={<EditUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="/products/edit/:productId" element={<EditProduct />} />
              <Route path="/product/newProduct" element={<NewProduct />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/calendar" element={<Calendar />} />
              <Route path="*" element={<Error />} />
            </Routes>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;




