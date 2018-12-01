import React, { Component } from "react";
import Wrapper from '../components/Wrapper/Wrapper.js';
import Search from "../components/Search/Search.js";
import Industry from "../components/Industry/Industry.js";

class Home extends Component {
    Home = props => {
        return (
            <div className="columns">
                <Search/>
                {/* <Wrapper><Industry/></Wrapper> */}
            </div>
        );
    }
    render() {
        return (
        <div>
                <Search/>
                <Wrapper><Industry/></Wrapper>
        </div>
        );
    }
}
export default Home;