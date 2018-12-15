import React, { Component } from "react";
// import Header1 from "../Header.1";
// import Accordion from "../components/Accordion";
import Collapsible from "react-collapsible";
// import "./Results.css";

const Results = props => (
            <div className="section ">
                <div className="container is-fluid level" id="container">
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-10 is-offset-2">
                        {props.reviews.map(place => (
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <figure>
                                        <img src={place.photo}/>
                                    </figure>
                                    <div id="place">
                                        <h4>{place.name}</h4>
                                        <p>Phone Number: {place.phone}</p>
                                        {/* <p>Open Now: {place.opening_hours.open_now ? ("Yes") : ("No")}</p> */}
                                        <p>{place.address}</p>
                                        <span>Rating: {place.rating} (REVIEWS: {place.reviews.length})</span>
                                    </div>
                                    
                                    <Collapsible trigger="View Comments">
                                        <div className="container is-fluid" id="comment">
                                            <div className="tile is-ancestor">
                                                <div className="tile is-vertical">
                                                {place.reviews.map(review => (
                                                        <div className="tile is-parent" id="ind-reviews">
                                                            <figure className="image is-70x70">
                                                                <img src={review.profile_photo_url} className="is-rounded" alt="userpic" />
                                                            </figure>
                                                            <article className="tile is-child speech-bubble box comment">
                                                                <p>{review.author_name}</p>
                                                                <p>Rating: {review.rating}</p>
                                                                <p>Time: {review.time}</p>
                                                                <p>{review.text}</p>
                                                            </article>
                                                        </div>
                                                ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Collapsible>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
export default Results;