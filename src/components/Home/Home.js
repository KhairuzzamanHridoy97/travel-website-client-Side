import React, { useState } from "react";
import "./Home.css";
import Banner from "./../Banner/Banner";
import Contact from "./../Contact/Contact";
import Footer from "./../Footer/Footer";
import Services from "../Services/Services";
import AllServices from "../AllServices/AllServices";
import Menubar from "../Menubar/Menubar";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <div className="text-center mt-5"></div>
      {/* <Menubar></Menubar> */}
      <Banner></Banner>
      <AllServices></AllServices>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
