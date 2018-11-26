import React from "react";
import "./Search.css";

const Search = props => (
  <div class="hero-body has-text-centered">
      <div class="columns is-mobile is-centered">
        <div class="column is-half is-narrow">
          <div class="field has-addons">
            <div class="control is-expanded">
              <input class="input" type="text" placeholder="Find a business"/>
            </div>
            <div class="control">
            {/* put back button is-info under class */}
              <button class="button is-info" id="btn-info">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
);

export default Search;