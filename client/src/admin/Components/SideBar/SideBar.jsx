import React, { useState } from "react";
import {
  FaBars,
  FaCommentAlt,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";
import { IoFastFood, IoFastFoodSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "./Sidebar.css";
import logo from "../../../assets/images/navLogo.png";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    // {
    //   path: "/dashboard",
    //   name: "Dashboard",
    //   icon: <FaTh />,
    // },
    {
      path: "foods",
      name: "Foods",
      icon: <IoFastFoodSharp />,
    },
    {
      path: "users",
      name: "Users",
      icon: <FaUserAlt />,
    },
    {
      path: "sales",
      name: "Sales",
      icon: <FaShoppingCart />,
    },
  ];
  return (
    <div className="dashboard">
      <div style={{ width: isOpen ? "300px" : "100px" }} className="sidebar">
        <div className="top-section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="dash-logo"
          >
            <img
              style={{ marginLeft: isOpen ? "10px" : "0px" }}
              width={"80px"}
              src={logo}
              alt="dashboard logo"
            />
          </h1>
          <div
            style={{ marginLeft: isOpen ? "80px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        <hr></hr>
        <div className="dash-links">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="dash-link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <hr></hr>
        {/* <div
          style={{ width: isOpen ? "90px" : "10px" }}
          className="dropdown"
        >
          <Dropdown as={ButtonGroup}>
            <Button size="sm" variant="success">
              <img
                width="50px"
                style={{margin:"0px",borderRadius: "50%" }}
                src="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680"
                alt="img"
              />
            </Button>

            <Dropdown.Toggle
              split
              size="lg"
              variant="success"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
