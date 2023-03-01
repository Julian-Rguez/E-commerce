import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";
import "./login.css";
export default function Login() {
  return (
    <>
      <NavBar />
      <div className="loginContainer">
        <div id="loginButtonGoToHomepage">
          <Link to="/home">
            <button type="button" class="btn btn-success">
              Go to homepage 🡆
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
