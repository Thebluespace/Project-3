import React, { Component } from "react";
import Header from '../components/Header/Header.js';
import Footer from "../components/Footer/Footer.js";
import Wrapper from '../components/Wrapper/Wrapper.js';
import Search from "../components/Search/Search.js";
import Industry from "../components/Industry/Industry.js";

class Home extends Component {
    render() {
        return (
        <div>
            <Header/>
                <Search/>
                <div className="wrapper" id="columns">
                    <Industry/>
                </div>
            <Footer/>
        </div>
        );
    }
}
export default Home;