import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ListProduct from "./pages/ListProduct";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import Category from "./component/Category";
import EditCategory from "./component/EditCategory";
import AboutPage from "./pages/AboutPage";
import Feedback from "./component/Feedback";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React, { useState } from "react";
import { AuthContext } from "./index";
import EditFeedback from "./component/EditFeedback";
import Logout from "./component/Logout";

function App() {  
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/feedback" element={<Feedback/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/contact/edit/:uid" element={<EditFeedback/>}></Route>
          <Route path="product" element={<ProductPage />}>
              <Route index element={<ListProduct />} />
              <Route path=":id" element={<ProductDetailPage />} />
            </Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/list_category" element={<CategoryPage />}></Route>
          <Route path="/list_category/form_category" element={<Category />}></Route>
          <Route path="/category/edit/:uid" element={<EditCategory/>}></Route>
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
