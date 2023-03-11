import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Auth/LoginButton";
import Swal from "sweetalert2";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import logoLogin from "../../assets/images/logo.png";
import {reactLocalStorage} from 'reactjs-localstorage';
import "./login.css";
import { useDispatch } from "react-redux";
import { updateRoll } from "../../Redux/Actions/Actions";

export default function Login() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();
  let [PWadmin,setPWadmin] = useState (true);
  let [pw,setpw] = useState ("");
  reactLocalStorage.set("Shopping", "0")
  reactLocalStorage.set("ShoppingCant", "0")
  function adminCheck(e){
      if (e.target.checked) {
        document.getElementById ("txtLogin").disabled =false;
        setPWadmin (false)
      }
      else {
        document.getElementById ("txtLogin").disabled =true;
        setPWadmin (true)
      };
      setpw ("");
      dispatch(updateRoll("client"))
    }
    function adminChange(e){
      e.preventDefault();
      setpw (e.target.value);
      if (e.target.value ==="12345678") {
        setPWadmin (true)
        dispatch(updateRoll("admin"))
      }
      else {
        setPWadmin (false)
        dispatch(updateRoll("client"))
      }
    }
  function msn(e) {
    e.preventDefault();
    Swal.fire({
      title: "already authenticated!",
      icon: "warning",
      confirmButtonColor: "#e38e15",
    });
  }
    function msn2(e) {
      e.preventDefault();
      Swal.fire({
        title: "wrong admin password!",
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
            <p>
              Authenticate with Google and access our website, we'll save your data for extra benefits and we'll keep you
              informed.
            </p>
            <label>
              <input type="checkbox" onClick={(e)=>adminCheck(e)}/>
              &nbsp;&nbsp;&nbsp;Administrator &nbsp;&nbsp;
              <input  type="password" maxlength="8" className="txtLogin" id="txtLogin"  placeholder = "Password" disabled = {true} value ={pw} onChange = {(e)=>adminChange(e)} />
            </label><br /><br />
            {
            isAuthenticated? (
              <>
                <button
                  onClick={(e) => msn(e)}
                  className="btn btn-success"
                >
                  Login Google 🡆
                </button>
              </>
            ) : (
              PWadmin?
              <Link to="/validating">
                <LoginButton />
              </Link>:
              <button
              onClick={(e) => msn2(e)}
              className="btn btn-success"
            >
              Login Google 🡆
            </button>
            )}
            <br /><p><br />
              or you can enter as a guest and know our page and our products
            </p>
            <Link to="/home">
              <button  className="btn btn-success">
              Direct income 🡆
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
