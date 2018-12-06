"use strict";
import React, { Component } from "react";
import Header from '../components/Header/Header.js';
import Footer from "../components/Footer/Footer.js";
import Wrapper from '../components/Wrapper/Wrapper.js';
import Search from "../components/Search/Search.js";
import Industry from "../components/Industry/Industry.js";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/2566/11/287831458/1087833265.mp4?token=1543892716-0x38e1b989c2ad4cf0c9466c033acbffa6ce001916'
        }
    }

    render() {
        return (
        <div>
    
            <Header />
            <Search />
            <div className="wrapper" id="columns">
                <Industry />
            </div>
            <Footer />
        </div>
        );
    }
}
export default Home;