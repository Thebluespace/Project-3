import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Wrapper from './components/Wrapper/Wrapper.js';
import Search from "./components/Search/Search.js";
import Industry from "./components/Industry/Industry.js";

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = ({ user }) => (
  <BrowserRouter>
    <Switch>
      {hasRole(user, ['user']) && <Route path='/user' component={User} />}
      {hasRole(user, ['admin']) && <Route path='/admin' component={Admin} />}
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        {/* <Wrapper> */}
        <div className="columns">
          <Search />
        </div>
        <div className="columns">
          <Industry />
        </div>
        {/* </Wrapper> */}
      </div>

    );
  }
}

export default App;
