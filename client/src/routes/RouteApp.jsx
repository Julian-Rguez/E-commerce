import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login/login";
import Home from "../components/home/home";
import About from "../Pages/About/About";
import NotFound from "../Pages/Not found/NotFound";
import Features from "../Pages/Features/Features";
import Pricing from "../Pages/Pricing/Pricing";
import Details from "../components/Detail/details";
import Validating from "../components/validating/validating";

function RouteApp() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="detail/:id" element={<Details/>} />
        <Route exact path="/validating" element={<Validating/>} />
        <Route exact path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default RouteApp;
