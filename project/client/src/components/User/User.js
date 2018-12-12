import React from "react";
import "./User.css";


const User = props => (
    <div className="login">
        <div className="container">
            <div className="notification">
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="  email" placeholder=" Email" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope fa-1x"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check fa-2x"></i>
                        </span>
                    </p>
                </div>  

                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type=" password" placeholder=" Password" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock fa-1x"></i>
                        </span>
                    </p>
                </div>

                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type=" phone number" placeholder=" Mobile" />
                        <span className="icon is-small is-left">
                        <i className="fas fa-phone fa-1x"></i>
                        </span>
                    </p>
                </div>

                <div className="signUpbtn" />
                <div className="field is-grouped">
                    <p className="control id=signup">
                        <a className="button is-primary" id="submit">
                            Submit
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </div>

);

export default User;


