import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hasRole, isAllowed } from './config/alligator';
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Results from "./pages/Results";

    const App = () => (
    <Router>
      <div>
          <Switch>
            <Route exact path="/home" component={Results}/>
            <Route path="/" component={Login}/>
            {/* {hasRole(user, ["user"]) && <Route exact path="/" Component={<Wrapper/>}/>} */}
            {/* {!hasRole(user, ["user"]) && <Route path="/" Component={<UserLogin/>}/>}  */}
          </Switch>
      </div>
    </Router>
    )
export default App;
