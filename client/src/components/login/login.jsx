import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Auth/LoginButton";
import Logo from "../../assets/images/logo.png"
import Swal from "sweetalert2";
import "./login.css";
export default function Login() {
  const { isAuthenticated } = useAuth0();
  function msn(e) {
    e.preventDefault();
    Swal.fire({
      title: "already authenticated!",
      icon: "warning",
      confirmButtonColor: "#e38e15",
    });
  }
  return (
    <>
      <div className="exactLoginContainer">
        <div id="loginButtonGoToHomepage">
          <div id="int">
            <img src={Logo} alt="logo" className="loginLogo"/>
            <p>
              You can authenticate with Google and access all our options, we
              will save your data to get extra benefits and we will keep you
              informed.
            </p>
            {!isAuthenticated ? (
              <Link to="/validating">
                <LoginButton />
                <br />
                <br />
              </Link>
            ) : (
              <button
                onClick={(e) => msn(e)}
                type="button"
                class="btn btn-success"
              >
                Login with Google 🡆
              </button>
            )}

            <p>
              Or you can enter as a guest and know our site and our products
            </p>
            <Link to="/home">
              <button type="button" class="btn btn-success">
                Enter as guest 🡆
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
