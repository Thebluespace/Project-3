import React, { Component } from "react";
import API from "../utils/API.js";
import "./Login.css";
//import Login from "../components/Login/Login.js";


class Login extends Component {
    state = {
        email: "",
        password: "",
        location: ""
    }
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };
    handleLogin = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.Login({
                email: this.state.email,
                password: this.state.password,
                location: this.state.location
            }).catch(err => console.log(err));
        }
    }
    render() {
        return (

            // <Login />
            <div>
                <video autoPlay loop id="video-background" muted plays-inline>
                    <source src="./Styles/crowd.mp4" type="video/mp4" />
                </video>
                <h1>Who's Bad</h1>

                <div class="login">
                    <div class="container">
                        <div class="notification">
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input" type="  email" placeholder=" Email" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope fa-1x"></i>
                                    </span>
                                    <span class="icon is-small is-right">
                                        <i class="fas fa-check fa-2x"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control has-icons-left">
                                    <input class="input" type=" password" placeholder=" Password" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-lock fa-1x"></i>
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