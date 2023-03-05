import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Auth/LoginButton";
import Swal from "sweetalert2";
import {reactLocalStorage} from 'reactjs-localstorage';
import "./login.css";
export default function Login() {
  const { isAuthenticated } = useAuth0();
  let PWadmin = true;
  reactLocalStorage.set("Shopping", "0")
  function adminCheck(e){
    (e.target.checked)?
    document.getElementById ("txtLogin").disabled =false:
    document.getElementById ("txtLogin").disabled =true;
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
        <div id="loginButtonGoToHomepage">
          <div id="int">
            <h3>Food at home</h3>
            <p>
              You can authenticate with Google and access all our options, we
              will save your data for extra benefits and we will keep you
              informed.
            </p>
            {
            isAuthenticated? (
              <>
                <button
                  onClick={(e) => msn(e)}
                  class="btn btn-success"
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
              class="btn btn-success"
            >
              Login Google 🡆
            </button>
            )}
            <br /><br /><label>
              <input type="checkbox" onClick={(e)=>adminCheck(e)}/>
              &nbsp;&nbsp;&nbsp;Administrator &nbsp;&nbsp;
              <input  type="password" maxlength="8" className="txtLogin" id="txtLogin"  placeholder = "Password" disabled = "false"/>
            </label>
            <br /><p><br />
              or you can enter as a guest and know our page and our products
            </p>
            <Link to="/home">
              <button  class="btn btn-success">
                Go like invited 🡆
              </button>
            </Link>
          </div>
        </div>
      </div>
      
          <div className="background">
            <img
              src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1500&q=960"
              alt="main"
            />
          </div>
      <Footer />
    </>
  );
}
