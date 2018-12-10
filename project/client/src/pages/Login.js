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
                        <source src="https://player.vimeo.com/external/287831458.sd.mp4?s=ea1c5ae2328fb88b03335bd198970d9736c271e7&profile_id=165" type="video/mp4" />
                    </video>
                    <h1 id="webtitle">WHO'S BAD?</h1>
                    {this.props.match.params.id ? <User/> : <Signin/>}
                    
                </div>
        );
    }
}
export default Login;