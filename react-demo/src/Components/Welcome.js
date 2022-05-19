import React from "react";
import './Welcome.css'
import image from '../Assets/welcome.jpg'


const Welcome = () => {
    return(
        <div className="welcome" style={{backgroundImage:`url(${image})`}}>
            <h1 className="header">Welcome to React</h1>
            <p className="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    )
}

export default Welcome;