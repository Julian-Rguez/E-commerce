import React from "react";
import "./validating.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
function Validating() {
  const { isAuthenticated } = useAuth0();
  return (
        <div className="valida">
          {!isAuthenticated?
          <Link to="/">
            <h1>Authentication error</h1>
            <button type="button" class="btn btn-success">Back</button>              
          </Link>:
          window.location.href = "http://localhost:3000/home"}
        </div>
  );
}

export default Validating;
