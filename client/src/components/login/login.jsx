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
        {/* <div>
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="first" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="second" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="third" />
        </div> */}
        <div className="background">
          <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=1500&q=600" alt="main" />
        </div>
      </div>
      <Footer />
    </>
  );
}
