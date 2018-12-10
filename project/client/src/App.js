import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
<<<<<<< HEAD
import User from "./components/User"
import Geo from "./components/Geolocation";
=======
import User from "./components/User";
import Results from "./pages/Results";
>>>>>>> ce11e651598c35639936d875b16694a9bdf4ec1d



    const App = () => (
    <Router>
      <div>
        <Geo/>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exacts path="/signup" component={User}/>
            <Route path="/:id" component={Login}/>
            <Route path="/" component={Login}/>
            {/* {hasRole(user, ["user"]) && <Route exact path="/" Component={<Wrapper/>}/>} */}
            {/* {!hasRole(user, ["user"]) && <Route path="/" Component={<UserLogin/>}/>}  */}
          </Switch>
      </div>
    </Router>
    )
export default App;
