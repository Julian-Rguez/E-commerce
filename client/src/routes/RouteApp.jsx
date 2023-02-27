import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login/login";
import Home from "../components/home/home";

function RouteApp() {
  return (
    <>      
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element={<Home/>} />
      </Routes>
    </>
  );
}

export default RouteApp;
