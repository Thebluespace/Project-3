
import React from "react";
import "./User.css";


const User = props => (

    <div>
        <video autoplay loop id="video-background" muted plays-inline>
            <source src="https://player.vimeo.com/external/287831458.sd.mp4?s=ea1c5ae2328fb88b03335bd198970d9736c271e7profile_id=165" type="video/mp4" />
        </video>
        <h1>Who's Bad</h1>

        <div className="login">
            <div className="container">
                <div className="notification">
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="  email" placeholder=" Email" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope fa-2x"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type=" password" placeholder=" Password" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
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
                        <p className="control"><a className="button is-light">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default User;


