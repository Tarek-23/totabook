import { Button } from "@material-ui/core";
import "./Login.css";
import React from "react";
import { auth, provider } from "./firebase";
import { useAuthValue } from "./AuthProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useAuthValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/800px-Facebook_f_Logo_%28with_gradient%29.svg.png"

          src="/logo512.png"
          alt="fb logo"
        />

        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="fb text"
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
