import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
    render() {
        return (
                <div>
                    <video autoplay loop id="video-background" muted plays-inline>
                        <source src="https://player.vimeo.com/external/287831458.sd.mp4?s=ea1c5ae2328fb88b03335bd198970d9736c271e7&profile_id=165" type="video/mp4" />
                    </video>
                    <h1>Who's Bad</h1>

                    <div class="login">
                        <div class="container">
                            <div class="notification">
                                <div class="field">
                                    <p class="control has-icons-left has-icons-right">
                                        <input class="input" type="  email" placeholder=" Email" />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                        <span class="icon is-small is-right">
                                            <i class="fas fa-check"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control has-icons-left">
                                        <input class="input" type=" password" placeholder=" Password" />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-lock"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="loginbtn" />
                                <div class="field is-grouped">
                                    <p class="control">
                                        <a class="button is-primary">
                                            Login</a>
                                    </p>
                                    <div class="signUpbtn" />
                                    <p class="control"><a class="button is-light">Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Login;