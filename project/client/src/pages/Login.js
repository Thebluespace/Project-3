import React, { Component } from "react";
import API from "../utils/API.js";
import "./Login.css";
import Signin from "../components/SignIn/Signin";
import User from "../components/User/User";
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
                    {this.props.match.params.id ? <User/> : <Signin/>}
                    
                </div>
        );
    }
}
export default Login;