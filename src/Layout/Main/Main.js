import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../Component/Footer";
import FAQ from "../../Pages/Blog/Blog";
import Header from "../../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <FAQ></FAQ>
      <Footer />
    </div>
  );
};

export default Main;
