import React, { Component } from "react";
import "./Wrapper.css";
    
    const Yeet = props => {
        return (<div className="wrapper">{props.children}</div>)
    };
export default Yeet;
