import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hasRole, isAllowed } from './config/alligator';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Wrapper from './components/Wrapper/Wrapper.js';
import Search from "./components/Search/Search.js";
import Industry from "./components/Industry/Industry.js";
import Footer from "./components/Footer/Footer.js";
//import UserLogin from "./components/Login/Login.js";

const user = {
  roles: ["user"],
  rights: ["user"]
};

const admin = {
  roles : ["admin"],
  rights: ["admin"]
};

const App = () => (
  <Router>
    <div>
      <Header />  
        <Switch>
          <Route path="*" Component={<Wrapper/>}></Route>
          {/* {hasRole(user, ["user"]) && <Route exact path="/" Component={<Wrapper/>}/>} */}
          {/* {!hasRole(user, ["user"]) && <Route path="/" Component={<UserLogin/>}/>}  */}
          
        </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;