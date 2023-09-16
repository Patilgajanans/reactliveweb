import React from "react";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import {  Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
 
const App = ()=>{
  return(
    <>
     <Navbar/>
     <Routes>
        <Route path ="/*"  Component={Home}/>
        <Route path ="/about" Component={About}/>
        <Route path ="/service" Component={Service}/>
        <Route path ="/contact" Component={Contact}/>
     </Routes>
     <Footer/>
      
    </>
  )
}

export default App;
