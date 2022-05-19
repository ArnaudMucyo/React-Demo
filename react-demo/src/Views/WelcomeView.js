import React from "react";
import './WelcomeView.css'
import Welcome from "../Components/Welcome";
import SignIn from "../Components/SignIn";


const WelcomeView = () => {
    return(
        <div className='view'>
          <Welcome/>
            <SignIn/>
        </div>

    )
}

export default WelcomeView;