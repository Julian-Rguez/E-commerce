import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <button  className ="btn btn-success" onClick={() => loginWithPopup()}>Login Google 🡆</button>
  );
};
