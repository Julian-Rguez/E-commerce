import React from "react";
import { Link } from "react-router-dom";
import "./login.css"
export default function Login() {
  return (
    <>
      <div className="loginContainer">
        <div id="loginButtonGoToHomepage">
          <Link to="/home">
              <button   type="button" class="btn btn-success">Go to homepage 🡆</button>
          </Link>
        </div>
      </div>        
    </>
  );
}