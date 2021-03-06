import React, { Component } from "react";
import { Redirect,withRouter } from 'react-router-dom'
import API from "../utils/API.js";
import "./Login.css";
import "../components/SignIn/Signin.css";
import "../components/User/User.css"
class Login extends Component {

    state = {
        email: "",
        password: "",
        phone: "",
        location: "",
        error: ""
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
        this.setState({"error":""});
        if (this.state.email&& this.state.password) {
        API.signin({
            email: this.state.email,
            password: this.state.password
         }).then(data=> {
            console.log(data.data);
            if(data.data.type === "success"){
                this.props.history.push('/home')
            } else {
                this.setState({"error" : data.data.type});
            }
        }).catch(err => console.log(err));
        }
    }

    handleSignup = event => {
        event.preventDefault();
        this.setState({"error":""});
        if (this.state.email&& this.state.password) {
        API.signup({
            email: this.state.email,
            password: this.state.password
         }).then(data=> {
            console.log(data.data);
            if(data.data.type === "success"){
                this.props.history.push('/home')
            } else {
                this.setState({"error" : data.data.type});
            }
         }).catch(err => console.log(err));
        }
    };
    render() {
        return (
            // <Login />
                <div>
                    <video autoPlay loop id="video-background" muted plays-inline>
                        <source src="https://player.vimeo.com/external/287831458.sd.mp4?s=ea1c5ae2328fb88b03335bd198970d9736c271e7&profile_id=165" type="video/mp4" />
                    </video>
                    <h1 id="webtitle">WHO'S BAD?</h1>
                    {!this.props.match.params.id ? <div className="login">
                    {this.state.error === "" ? (<div/>) : (<div><p>{this.state.error}</p></div>) }
                            <div className="level">
                                <div className="notification">
                                    <div className="field">
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="email" name="email" onChange={this.handleInputChange} placeholder=" Email" />
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
                                            <input className="input" type="password" name="password" onChange={this.handleInputChange} placeholder=" Password" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-lock fa-1x "></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="loginbtn" />
                                    <div className="field is-grouped">
                                        <p className="control">
                                            <a className="button is-primary" onClick={this.handleLogin}>
                                                Login</a>
                                        </p>
                                        <div className="signUpbtn" />
                                        <p className="control">
                                            <a className="button is-light">Sign Up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> : <div className="login">
                        {this.state.error === "" ? (<div/>) : (<div><p>{this.state.error}</p></div>) }
                            <div className="level">
                                <div className="notification">
                                    <div className="field">
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="email" name="email" onChange={this.handleInputChange} placeholder=" Email" />
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
                                            <input className="input" type="password" name="password" onChange={this.handleInputChange} placeholder=" Password" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-lock fa-1x"></i>
                                            </span>
                                        </p>
                                    </div>

                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="phone number" name="phone" onChange={this.handleInputChange} placeholder=" Mobile" />
                                            <span className="icon is-small is-left">
                                            <i className="fas fa-phone fa-1x"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="signUpbtn" />
                                    <div className="field is-grouped">
                                        <p className="control id=signup">
                                            <a className="button is-primary" id="submit" onClick={this.handleSignup}>
                                                Submit
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
        );
    }
}
export default Login;