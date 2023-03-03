import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Auth/LoginButton";
import Swal from 'sweetalert2'
import "./login.css";
export default function Login() {
  const { isAuthenticated } = useAuth0();
  function msn(e){
    e.preventDefault();
    Swal.fire({
      title: 'already authenticated!',                
      icon: 'warning',
      confirmButtonColor: '#e38e15'
    })
  }
  return (
    <>
      <div className="loginContainer">
        <div id="loginButtonGoToHomepage">
          <div id="int">
            <h3>Food at home</h3>
            <p>You can authenticate with Google and access all our options, we will save your data for extra benefits and we will keep you informed.</p>
            {!isAuthenticated?
            <Link to="/validating" >
            <LoginButton /><br /><br />
            </Link>:
            <button onClick={(e)=>msn(e)} type="button" class="btn btn-success" >Login Google 🡆</button>}

            <p>or you can enter as a guest and know our page and our products</p>
            <Link to="/home">
            <button type="button" class="btn btn-success">Go like invited 🡆</button>              
            </Link>
          </div>
        </div>
      </div><br />
      <Footer />
    </>
  );
}
