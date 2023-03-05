import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Auth/LoginButton";
import Swal from "sweetalert2";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import logoLogin from "../../assets/images/logo.png";
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
      <div className="loginContainer">
        <div className="loginTitle">
          <img src={logoLogin} width="300px" alt="Login" />
        </div>
        <div id="loginButtonGoToHomepage">
          <div id="int">
            {/* <h3>Food at home</h3> */}
            <p>
              Authenticate with Google and access our website, we'll save your data for extra benefits and we'll keep you
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
                Login Google 🡆
              </button>
            )}

            <p>
              Or enter as a guest and meet our website
            </p>
            <Link to="/home">
              <button type="button" class="btn btn-success">
                Go like invited 🡆
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="background">
        <MDBCarousel>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8"
            alt="1 tarta"
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src="https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8MHwwfHw%3D"
            alt="2 oregano"
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHwwfDB8fA%3D%3D"
            alt="3 limon"
          />
        </MDBCarousel>
      </div>
      <Footer />
    </>
  );
}
