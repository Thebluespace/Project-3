import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Wrapper from './components/Wrapper/Wrapper.js';
import Search from "./components/Search/Search.js";
import Industry from "./components/Industry/Industry.js";
import Footer from "./components/Footer/Footer.js";
import Results from "./components/Results/Results.js";
import Reviews from "./components/Reviews/Reviews.js";

class App extends Component {


  render() {
    return (
      <Results />
    //   <div>
    //     <Header />
    //     <div className="columns">
    //       <Search />
    //     </div>
    //     <Wrapper>
    //       <div className="columns">
    //         <Industry />
    //       </div>
    //     </Wrapper>

    //     <Footer />
    //   </div>
      
      
    );
  }
}

export default App;
