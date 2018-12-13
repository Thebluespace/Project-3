"use strict";
import React, { Component } from "react";
import API from "../utils/API.js";
import Header from '../components/Header';
import Footer from "../components/Footer";
import Collapsible from "react-collapsible";
import Results from "../components/Results";
import Search from "../components/Search/Search";
import Industry from "../components/Industry/Industry";
import  "../components/Industry/Industry.css";


class Home extends Component {

    state = {
        keyword: "",
        reviews: [],
        error: "",
        location: ""
    }
    handleInputChange = event => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        console.log(name,value);
        this.setState({
            [name]: value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.setState({"error": ""});
        API.query(this.state.keyword).then(data =>{
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
            API.query(this.state.keyword).then(data =>{
                this.setState({ "reviews": data.data.reviews});
            });
        });
    };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         videoURL: 'https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/2566/11/287831458/1087833265.mp4?token=1543892716-0x38e1b989c2ad4cf0c9466c033acbffa6ce001916'
            
    //     }
    // }

    render() {
        return (
        <div>

            <Header/>
               
                <div className="columns">
                    <div id="search" className="hero-body has-text-centered">
                        <div className="columns is-mobile is-centered">
                            <div className="column is-half is-narrow">
                            <div className="field has-addons">
                                <div className="control is-expanded"><input name="keyword" value={this.state.keyword} onChange={this.handleInputChange} className="input" type="text" placeholder="Find a business" id="search-bar"></input></div>
                                <div className="control">
                                <a onClick={this.handleSubmit} className="button is-info" id="btn-info" style={{border: "none"}}>Search</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.error != "" ? (<div><h1>{this.state.error}</h1></div>) : (<div/>)}
                {this.state.reviews.length === 0 ? (
                    <div className="wrapper" id="columns">
                        <div id="industry">
                            <div className="tile is-ancestor">
                                <div className="tile is-parent"> 
                                    <article className="tile is-child box" id="auto" onClick={this.handlePreset}>
                                    {/* <p className="title"></p> */}
                                    {/* <p className="subtitle" >Auto</p> */}
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="food">
                                    {/* <p className="title">Two</p> */}
                                    {/* <p className="subtitle" >Food</p> */}
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="retail">
                                    {/* <p className="title">Three</p> */}
                                    {/* <p className="subtitle">Retail</p> */}
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="health">
                                    {/* <p className="title">Four</p> */}
                                    {/* <p className="subtitle">Health</p> */}
                                    </article>
                                </div>
                                
                            </div>
                            <div className="tile is-ancestor">
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="services">
                                    {/* <p className="title">One</p> */}
                                    {/* <p className="subtitle">Services</p> */}
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="hotels">
                                    {/* <p className="title">Two</p> */}
                                    {/* <p className="subtitle">Hotels</p> */}
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id="entertainment">
                                    {/* <p className="title">Three</p> */}
                                    {/* <p className="subtitle">Entertainment</p> */}
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box" id=
                                    "shop">
                                    {/* <p className="title">Four</p> */}
                                    {/* <p className="subtitle">Clothing + Beauty</p> */}
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
export default Home;