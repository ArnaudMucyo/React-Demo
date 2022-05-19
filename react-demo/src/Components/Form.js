import React from "react";
import './Form.css'
import Button from "./Button";

const Form = () => {
    return(
        <div className="form_class">
            <form method="POST">

                <input className="username" name="username" type="text" placeholder="USERNAME" /><br/>
                <input className="password" name="password" type="password" placeholder="PASSWORD"/>
                <Button/>
            </form>
        </div>
    )
}

export default Form;