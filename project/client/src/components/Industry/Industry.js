import React from "react";
import "./Industry.css";

const Industry = () => {
    return (
        // <div className="tile is-ancestor">
        //     <div className="tile is-2 is-vertical is-parent is-2">
        //         <div className="tile is-child is-primary box">
        //             <p className="title">One</p>
        //         </div>
        //         <div className="tile is-child is-warning box">
        //             <p className="title">Two</p>
        //         </div>
        //     </div>
        //     <div className="tile is-parent is-2 is-info">
        //         <div className="tile is-child box">
        //             <p className="title">Three</p>
        //         </div>
        //     </div>
        // </div>
        <div id="industry">
            <div className="tile is-ancestor">
                
                <div className="tile is-parent">
                    <article className="tile is-child box">
                    {/* <p className="title"></p> */}
                    <p className="subtitle">Auto</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                    {/* <p className="title">Two</p> */}
                    <p className="subtitle">Food</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                    {/* <p className="title">Three</p> */}
                    <p className="subtitle">Retail</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                    {/* <p className="title">Four</p> */}
                    <p className="subtitle">Health</p>
                    </article>
                </div>
                
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                    {/* <p className="title">One</p> */}
                    <p className="subtitle">Services</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                    {/* <p className="title">Two</p> */}
                    <p className="subtitle">Pets</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                    {/* <p className="title">Three</p> */}
                    <p className="subtitle">Entertainment</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                    {/* <p className="title">Four</p> */}
                    <p className="subtitle">Clothing + Beauty</p>
                    </article>
                </div>
            </div>
        </div>
    )            
};
            
export default Industry;