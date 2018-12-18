"use strict";
import React, { Component } from "react";
import API from "../utils/API.js";
import Header from '../components/Header';
import Footer from "../components/Footer";
import Results from "../components/Results";
import {geolocated} from 'react-geolocated';
import { Redirect } from 'react-router-dom'
import  "../components/Industry/Industry.css";
import "./Search.css";

class Home extends Component {

    state = {
        keyword: "",
        reviews: [],
        error: "",
        location: ""
    };
    componentDidMount = () =>{
        var type = API.checkAuth();
        console.log(type);
        if (type.type === "/home"){
            return (<Redirect to="/home"/>)
        }
        setTimeout(()=>{   
        var error = localStorage.getItem("error");
        var location = localStorage.getItem("location");
        this.setState({"location":location,"error":error});
        },3000);
    }
    myCallback = data =>{
        setTimeout(()=>{   
        localStorage.setItem("error",data.error);
        localStorage.setItem("location",data.Geo);
        },2000)
    };
    handleInputChange = event => {
        event.preventDefault();
        const {name,value} = event.target;
        console.log(name,value);
        this.setState({
            [name]: value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.setState({"error": ""});
        if (this.state.location === "" || this.state.location === null) {
            return this.setState({"error":"No Location Available!"});
        }
        API.query(this.state.keyword,this.state.location).then(data =>{
            console.log(data.data.reviews);
            switch(data.data.reviews){
                case "No results found":
                    this.setState({"error": data.data.reviews});
                break;
                default:
                this.setState({ "reviews": data.data.reviews});
                break;
            }
        });
    };
    handlePreset = event => {
        const {id} = event.target;
        event.preventDefault();
        this.setState({
            "keyword": id,
            "error": ""
        }, () => {
            if (this.state.location === "" || this.state.location === null) {
                return this.setState({"error":"No Location Available!"});
            }
            API.query(this.state.keyword,this.state.location).then(data =>{
                console.log(data);
                switch(data.data.reviews){
                    case "No results found":
                        this.setState({"error": data.data.reviews});
                    break;
                    default:
                    this.setState({ "reviews": data.data.reviews});
                    break;
                }
            });
        });
    };

    unfliteredSearch = event => {
        event.preventDefault();
        this.setState({"error":""});
        if (this.state.location === "" || this.state.location === null) {
            return this.setState({"error":"No Location Available!"});
        }
        API.uquery(this.state.keyword,this.state.location).then(data =>{
            switch(data.data.reviews){
                case "No results found":
                    this.setState({"error": "Sorry! Still no reviews :("});
                break;
                default:
                    this.setState({ "reviews": data.data.reviews});
                break;
            }
        });

    }
    handleKey = event => {
        event.preventDefault();
        if (event.keycode === 13){
            this.setState({"error": ""});
            if (this.state.location === "" || this.state.location === null) {
                return this.setState({"error":"No Location Available!"});
            }
            API.query(this.state.keyword,this.state.location).then(data =>{
                console.log(data.data.reviews);
                switch(data.data.reviews){
                    case "No results found":
                        this.setState({"error": data.data.reviews});
                    break;
                    default:
                    this.setState({ "reviews": data.data.reviews});
                    break;
                }
            });
        }
        console.log(event);
    }
    returnHome = event => {
        event.preventDefault();
        this.setState({"error":"","reviews":[]});
    }

    render() {
        return (
        <div>
            {!this.props.isGeolocationAvailable ? this.myCallback({"Geo":"","error":"No Geolocation Available!"}) : !this.props.isGeolocationEnabled ? this.myCallback({"Geo":"","error":"Geolocation not enabled!"}) : this.props.coords ? this.myCallback({"Geo":this.props.coords.latitude + "," + this.props.coords.longitude,"error":""}) : this.myCallback({"Geo":"","error":"No Coords!"})}
            <Header/>
                <div className="columns">
                    <div id="search" className="hero-body has-text-centered">
                        <div className="columns is-mobile is-centered">
                            <div className="column is-half is-narrow">
                            <div className="field has-addons">
                                <div className="control is-expanded"><input name="keyword" onKeyUp={this.handlekey} value={this.state.keyword} onChange={this.handleInputChange} className="input" type="text" placeholder="Find a business" id="search-bar"></input></div>
                                <div className="control">
                                <a onClick={this.handleSubmit} className="button is-info" id="btn-info" style={{border: "none"}}>Search</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.error === "No results found" ? (<div><a className="button is-fullwidth" onClick={this.unfliteredSearch}>No Results found! Click here to remove bad filters!</a></div>) : this.state.error != "" ? (<div><h1>{this.state.error}</h1></div>) : (<div/>)}
                {this.state.reviews.length === 0 ? (
                    <div className="wrapper" id="columns">
                        <div id="industry">
                            <div className="tile is-ancestor">
                                <div className="tile is-parent"> 
                                    <article className="tile is-child box" id="auto" onClick={this.handlePreset}>

                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="food" onClick={this.handlePreset}>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="retail" onClick={this.handlePreset}>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="health" onClick={this.handlePreset}>
                                    </article>
                                </div>
                                
                            </div>
                            <div className="tile is-ancestor">
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="services" onClick={this.handlePreset}>

                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="hotels" onClick={this.handlePreset}>

                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="entertainment" onClick={this.handlePreset}>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="shop" onClick={this.handlePreset}>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div> 
                ) : (<Results reviews={this.state.reviews}/>)}
            <Footer/>
        </div>
        );
    }
}
export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Home);