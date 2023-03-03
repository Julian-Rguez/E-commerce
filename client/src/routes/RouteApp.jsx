import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login/login";
import Home from "../components/home/home";
import Details from "../components/Detail/details";
import Validating from "../components/validating/validating";

function RouteApp() {
  return (
    <>      
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="detail/:id" element={<Details/>} />
        <Route exact path="/validating" element={<Validating/>} />
      </Routes>
    </>
  );
}

export default RouteApp;
