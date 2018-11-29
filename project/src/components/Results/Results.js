import React from "react";
import "./Results.css";

const Results = props => (
    <div className="section">
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                        {/* <!-- Put any content you want --> */}
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                        {/* <!-- Put any content you want --> */}
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                        {/* <!-- Put any content you want --> */}
                        </article>
                    </div>
                    </div>
                    <div class="tile is-parent">
                    <article class="tile is-child box">
                        {/* <!-- Put any content you want --> */}
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                {/* <!-- Put any content you want --> */}
                </article>
            </div>
        </div>

    </div>
);

export default Results;