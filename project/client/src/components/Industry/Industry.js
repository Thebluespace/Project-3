import React from "react";
import "./Industry.css";

const Industry = () => {
    return (
        <div id="industry">
            <div className="tile is-ancestor">

                <div className="tile is-parent"> 
                    <article className="tile is-child box" id="auto">
                    {/* <p className="title"></p> */}
                    {/* <p className="subtitle" >Auto</p> */}
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box" id="food">
                    {/* <p className="title">Two</p> */}
                    {/* <p className="subtitle" >Food</p> */}
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box" id="retail">
                    {/* <p className="title">Three</p> */}
                    {/* <p className="subtitle">Retail</p> */}
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box" id="health">
                    {/* <p className="title">Four</p> */}
                    {/* <p className="subtitle">Health</p> */}
                    </article>
                </div>
                
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box" id="services">
                    {/* <p className="title">One</p> */}
                    {/* <p className="subtitle">Services</p> */}
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box" id="hotels">
                    {/* <p className="title">Two</p> */}
                    {/* <p className="subtitle">Hotels</p> */}
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box" id="entertainment">
                    {/* <p className="title">Three</p> */}
                    {/* <p className="subtitle">Entertainment</p> */}
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box" id=
                    "shop">
                    {/* <p className="title">Four</p> */}
                    {/* <p className="subtitle">Clothing + Beauty</p> */}
                    </article>
                </div>
            </div>
        </div>
    )            
};
            
export default Industry;