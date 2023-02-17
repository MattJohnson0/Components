import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GenericButton } from "../components/Buttons"
import { useLocation } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const location = useLocation();

  return <GenericButton handleClick={() => loginWithRedirect({appState: {
    returnTo: window.location.origin + location.pathname
  }})} text='Log In'></GenericButton>;
};

export default LoginButton;
