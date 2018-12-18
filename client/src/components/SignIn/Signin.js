import React from "react";
import "./Signin.css";

const Signin = props => (
    <div className="login">
        <div className="level">
            <div className="notification">
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder=" Email" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope fa-1x"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check fa-1x"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder=" Password" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock fa-1x "></i>
                        </span>
                    </p>
                </div>
                <div className="loginbtn" />
                <div className="field is-grouped">
                    <p className="control">
                        <a className="button is-primary">
                            Login</a>
                    </p>
                    <div className="signUpbtn" />
                    <p className="control">
                        <a className="button is-light">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Signin;