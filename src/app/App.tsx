import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "../components/parts/header/Header";
import Home from "../components/page/Home/Home";
import ProductDetails from "../components/page/ProductDetails/ProductDetails";
import Footer from "../components/parts/footer/Footer";
import Cart from "../components/page/Cart/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product-details/:id"} element={<ProductDetails />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
