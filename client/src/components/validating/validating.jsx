import React from "react";
import "./validating.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {postUser} from '../../Redux/Actions/Actions'
function Validating() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) dispatch(postUser({
    "mail":"jaco@mail.com",
    "roll":"admin"
}))
  return (
        <div className="valida">
          {!isAuthenticated?
          <>
            <h1 id="validateTxt">Waiting for authentication information.</h1>
            <Link to="/">
              <button id="validateBtn" type="button" className="btn btn-success">Back</button>              
            </Link>
          </>:
          window.location.href = "http://localhost:3000/home"}
        </div>
  );
}

export default Validating;
