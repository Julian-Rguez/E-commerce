import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Nav/NavBar";
import "./NotFound.css";
const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="nf-content">
        <div className="nf-advice">
          <h2 className="nf-error">ERROR</h2>
          <img
            src="https://img.freepik.com/vector-gratis/error-404-ilustracion-concepto-paisaje_114360-7898.jpg?t=st=1677803091~exp=1677803691~hmac=f73e6200d9d2669b2424cfb60e43303d6f799daf15f9528b613f6c95d64af001"
            alt="404"
          />
        </div>
        <Link to="home">
          <button className="nf-button">Back to home</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
