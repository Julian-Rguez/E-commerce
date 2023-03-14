import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";
import "./Dashboard.css";

const Dashboard = () => {
  console.log("Dashboard");
  return (
    <>
      <Nav />
      <div className="dash-container">
        <SideBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
