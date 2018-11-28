import React from "react";
import "./Search.css";

const Search = props => (
  <div id="search" className="hero-body has-text-centered">
      <div className="columns is-mobile is-centered">
        <div className="column is-half is-narrow">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input" type="text" placeholder="Find a business"/>
            </div>
            <div className="control">
            {/* put back button is-info under className */}
              <button className="button is-info" id="btn-info">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
);

export default Search;