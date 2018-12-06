import React, { Component } from "react";
import Header from "../Header/Header.js";
import "./Reviews.css";

class Reviews extends Component {
    render() {
        return (
            <div>
                <Header />
            
                <div className="container is-fluid">
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical">
                            {/* <div className="tile is-parent is-vertical">
                                <div className="tile is-child box">
                                </div>
                                <div className="tile is-child box">
                                </div>
                            </div> */}
                            <div className="tile is-parent">
                                <div className="tile is-child box speech-bubble">
                                    <p>User Pic</p>
                                    <p>Username</p>
                                    <p>rating</p>
                                    <p>date et time</p>
                                    <p>User comment</p>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <p>User Pic</p>
                                    <p>Username</p>
                                    <p>rating</p>
                                    <p>date et time</p>
                                    <p>User comment</p>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <p>User Pic</p>
                                    <p>Username</p>
                                    <p>rating</p>
                                    <p>date et time</p>
                                    <p>User comment</p>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <p>User Pic</p>
                                    <p>Username</p>
                                    <p>rating</p>
                                    <p>date et time</p>
                                    <p>User comment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reviews;


