import React from "react";
import "./Search.css";

     const Search = () => {
       return (
        <div className="columns">
          <div id="search" className="hero-body has-text-centered">
              <div className="columns is-mobile is-centered">
                <div className="column is-half is-narrow">
                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <input className="input" type="text" placeholder="Find a business" id="search-bar"/>
                    </div>
                    <div className="control">
                      <button className="button is-info" id="btn-info" style={{border: "none"}}>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
       )
     };
export default Search;