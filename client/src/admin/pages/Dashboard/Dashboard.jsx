import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../../components/Nav/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import "./Dashboard.css";

const Dashboard = () => {
  console.log("Dashboard");
  return (
    <>
      <div className="dash-container">
        <SideBar />
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
