import React from "react";
import './SignIn.css'
import Form from "./Form";

const SignIn = () => {
    return(
        <div className="signIn">
            <h1 className="header_s">SIGN IN</h1>
            <p className="body_s">Login Into your account to start the service</p>
            <Form/>
            <p className="no_account">Have no account yet? <span><a href="#" className="signUp_link">Sign Up</a></span></p>
        </div>
    )
}

export default SignIn;