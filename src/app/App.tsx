import React, { Fragment } from "react";
import "./App.css";
import Header from "../components/parts/header/Header";
import Footer from "../components/parts/footer/Footer";
import Home from "../components/page/Home/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
