import React, { Component } from "react";
import Header1 from "../components/Header.1/Header1";
// import Accordion from "../components/Accordion";
import Collapsible from "react-collapsible";
import "./Results.css";

class Results extends Component {

    render() {
        return (
            <div>
                <Header1 />
                <div className="section">
                    <div className="container is-fluid level" id="container">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-10">
                                <div className="tile is-parent">
                                    <div className="tile is-child box">
                                        <img src="https://fakeimg.pl/250x100/" />
                                        <h4>Restaurant Name</h4>
                                        <p>Address</p>
                                        <span>Rating and number of reviews</span>
                                        <Collapsible trigger="View Comments">
                                            <div className="container is-fluid">
                                                <div className="tile is-ancestor">
                                                    <div className="tile is-vertical">
                                                        {/* <div className="tile is-parent is-vertical">
                                    <div className="tile is-child box">
                                    </div>
                                    <div className="tile is-child box">
                                    </div>
                                </div> */}
                                                        <div className="tile is-parent speech-bubble">
                                                            <article className="tile is-child box comment" id="box">
                                                                <p>User Pic</p>
                                                                <p>Username</p>
                                                                <p>rating</p>
                                                                <p>date et time</p>
                                                                <p>User comment</p>
                                                            </article>
                                                        </div>
                                                        <div className="tile is-parent speech-bubble">
                                                            <article className="tile is-child box comment" id="box">
                                                                <p>User Pic</p>
                                                                <p>Username</p>
                                                                <p>rating</p>
                                                                <p>date et time</p>
                                                                <p>User comment</p>
                                                            </article>
                                                        </div>
                                                        <div className="tile is-parent speech-bubble">
                                                            <article className="tile is-child box comment" id="box">
                                                                <p>User Pic</p>
                                                                <p>Username</p>
                                                                <p>rating</p>
                                                                <p>date et time</p>
                                                                <p>User comment</p>
                                                            </article>
                                                        </div>
                                                        <div className="tile is-parent speech-bubble">
                                                            <article className="tile is-child box comment" id="box">
                                                                <p>User Pic</p>
                                                                <p>Username</p>
                                                                <p>rating</p>
                                                                <p>date et time</p>
                                                                <p>User comment</p>
                                                            </article>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Collapsible>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <div className="tile is-child box">
                                        <img src="https://fakeimg.pl/250x100/" />
                                        <h4>Restaurant Name</h4>
                                        <p>Address</p>
                                        <span>Rating and number of reviews</span>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <div className="tile is-child box">
                                        <img src="https://fakeimg.pl/250x100/" />
                                        <h4>Restaurant Name</h4>
                                        <p>Address</p>
                                        <span>Rating and number of reviews</span>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <div className="tile is-child box">
                                        <img src="https://fakeimg.pl/250x100/" />
                                        <h4>Restaurant Name</h4>
                                        <p>Address</p>
                                        <span>Rating and number of reviews</span>
                                    </div>
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