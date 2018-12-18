import React, { Component } from "react";
// import Header from "./components/Header/Header.js";

import "./Results.css";

class Results extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <div className="container is-fluid">
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-7">
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <img src="https://fakeimg.pl/250x100/"/>
                                    <h4>Restaurant Name</h4>
                                    <p>Address</p>
                                    <span>Rating and number of reviews</span>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <img src="https://fakeimg.pl/250x100/"/>
                                    <h4>Restaurant Name</h4>
                                    <p>Address</p>
                                    <span>Rating and number of reviews</span>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <img src="https://fakeimg.pl/250x100/"/>
                                    <h4>Restaurant Name</h4>
                                    <p>Address</p>
                                    <span>Rating and number of reviews</span>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <img src="https://fakeimg.pl/250x100/"/>
                                    <h4>Restaurant Name</h4>
                                    <p>Address</p>
                                    <span>Rating and number of reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
    }

}


export default Results;