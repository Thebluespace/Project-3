import React from "react";
import "./Header1.css";

const Header1 = props => (

    <section id="results-hero" className="hero is-primary">
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <button id="location"><i className="fas fa-map-marker-alt"></i></button>
                <div className="navbar-end" id="nav-btn-1">
                    <a href="#"><i className="fas fa-sign-out-alt"></i></a>
                    <a href="#"><i className="fas fa-home"></i></a>
                </div>
            </nav>
        </div>
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    WHO'S BAD?
                </h1>
            </div>
        </div>
    </section>

);
export default Header1;
