import React from "react";
import "./Industry.css";

const Industry = props => (
    <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child is-primary box">
                <p class="title">One</p>
            </div>
            <div class="tile is-child is-warning box">
                <p class="title">Two</p>
            </div>
        </div>
        <div class="tile is-parent is-info">
            <div class="tile is-child box">
                <p class="title">Three</p>
            </div>
        </div>
    </div>
);

export default Industry;