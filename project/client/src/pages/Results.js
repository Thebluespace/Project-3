import React, { Component } from "react";
import Header1 from "../components/Header.1/Header1";
// import Accordion from "../components/Accordion";
import Collapsible from "react-collapsible";
import "./Results.css";
import Footer from "../components/Footer/Footer";

class Results extends Component {

    render() {
        return (
            <div>
                <Header1 />
                <div className="section ">
                    <div className="container is-fluid level" id="container">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-10 is-offset-2">
                                <div className="tile is-parent">
                                    <div className="tile is-child box level" id="main-tile">
                                        <figure>
                                            <img src="https://fakeimg.pl/250x100/" />
                                        </figure>
                                        <br />
                                        <div id="">
                                            <h4>Restaurant Name</h4>
                                            <p>Phone Number</p>
                                            <p>Hours</p>
                                            <p>Address</p>
                                            <span>Rating and number of reviews</span>
                                        </div>
                                        <br />
                                        <Collapsible trigger="View Comments">
                                            <div className="container is-fluid" id="comment">
                                                <div className="tile is-ancestor">
                                                    {/* <div className="shadow1 container-fluid"> */}
                                                        <div className="tile is-vertical" id="comment-box">
                                                            <div>
                                                                <div className="tile is-parent" id="ind-reviews">
                                                                    <figure className="image is-70x70">
                                                                        <img src="http://lorempixel.com/100/100/" className="is-rounded" alt="userpic" />
                                                                    </figure>
                                                                    <article className="tile is-child speech-bubble box comment">

                                                                        <p>Username</p>
                                                                        <p>rating</p>
                                                                        <p>date et time</p>
                                                                        <p>User comment</p>
                                                                    </article>
                                                                </div></div>



                                                            <div className="tile is-parent">
                                                                <article className="tile is-child speech-bubble box comment">
                                                                    <p>User Pic</p>
                                                                    <p>Username</p>
                                                                    <p>rating</p>
                                                                    <p>date et time</p>
                                                                    <p>User comment</p>
                                                                </article>
                                                            </div>
                                                            <div className="tile is-parent speech-bubble">
                                                                <article className="tile is-child  box comment">
                                                                    <p>User Pic</p>
                                                                    <p>Username</p>
                                                                    <p>rating</p>
                                                                    <p>date et time</p>
                                                                    <p>User comment</p>
                                                                </article>
                                                            </div>
                                                            <div className="tile is-parent ">
                                                                <article className="tile is-child box comment speech-bubble">
                                                                    <p>User Pic</p>
                                                                    <p>Username</p>
                                                                    <p>rating</p>
                                                                    <p>date et time</p>
                                                                    <p>User comment</p>
                                                                </article>
                                                            </div>
                                                        </div>
                                                    {/* </div> */}
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
                {/* <Footer /> */}
            </div>
            
        );

    }

}


export default Results;