import React, { Component } from "react";
import "./Wrapper.css";
import Search from "../Search/Search.js";
import Industry from "../Industry/Industry.js";
//import DisplayResults from "./components/Display/Display.js";

class SearchResultContainer extends Component {
    state = {
        placesResults: []
    }
    
    Yeet = props => {
        return (<div className="wrapper">{props.children}</div>)
        if(this.state.placeResults.length === 0) {
            return (<div><Search/><Industry/></div>)
        } else {
            //return <DisplayResults results={this.state.placesResults} />;
            return (<div><Search/><Industry/></div>)
        }   
    };

    render() {
        return (this.Yeet);
    };
}
export default SearchResultContainer;
