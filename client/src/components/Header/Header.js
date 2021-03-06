import React from "react";
import "./Header.css";

const Header = props => (

    <section id="hero" className="hero is-primary">
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                {/* <div className="navbar-brand">
                    {/* <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                </a> */}
                    {/* put back role=button when you have a working link */}
                    
                    {/* change buttons back to a */}


                {/* </div> */}
                <button id="location"><i className="fas fa-map-marker-alt"></i></button>
                <div className="navbar-end" id="nav-btn">
                    <a href="/api/logout"><i className="fas fa-sign-out-alt"></i></a>
                    <a href="/"><i className="fas fa-home"></i></a>
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
export default Header;
