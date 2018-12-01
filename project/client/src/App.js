import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hasRole, isAllowed } from './config/alligator';
import './App.css';
import Header from './components/Header/Header.js';
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer.js";
import Login from "./components/Login/Login.js";
import Home from "./pages/Home";


import Wrapper from './components/Wrapper/Wrapper.js';
import Search from "./components/Search/Search.js";
import Industry from "./components/Industry/Industry.js";

    const App = () => (
    <Router>
      <div>
        {/* <Header /> */}
          {/* <Search/>
          <Wrapper><Industry/></Wrapper> */}
                  {/* <Search />
                  <Wrapper><div className="columns"><Industry /></div></Wrapper> */}

                  <Login/>

          <Switch>
            <Route exact path="/Home" Component={Home}/>
            <Route path="/" Component={Login}/>
            {/* {hasRole(user, ["user"]) && <Route exact path="/" Component={<Wrapper/>}/>} */}
            {/* {!hasRole(user, ["user"]) && <Route path="/" Component={<UserLogin/>}/>}  */}
          </Switch>
        <Footer />
      </div>
    </Router>
    )
export default App;
