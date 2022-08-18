import React from "react";
import "./Login.css";
import spotify from "./assets/spotify.png";
import { loginUrl } from "./spotify";
const Login = () => {
    return (
        <div className="login">
            <img src={spotify} />
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    );
};

export default Login;
