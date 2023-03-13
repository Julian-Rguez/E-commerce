import React from "react";
import "./validating.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {postUser} from '../../Redux/Actions/Actions'
function Validating() {
  const roll = useSelector((state) => state.roll);  
  const dispatch = useDispatch();
  const { isAuthenticated,  user } = useAuth0();


  if (isAuthenticated) {
    const info = {
      mail:user.email, 
      roll:roll
    }
    dispatch(postUser(info))
  }
  return (
        <div className="valida">
          {!isAuthenticated?
          <>
            <h1 id="validateTxt">Waiting for authentication information.</h1>
            <Link to="/">
              <button id="validateBtn" type="button" className="btn btn-success">Back</button>              
            </Link>
          </>:window.location.href = "https://e-commerce-one-gules.vercel.app/home"
        }
        </div>
  );
}

export default Validating;
