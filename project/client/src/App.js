import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
<<<<<<< HEAD
import Results from "./pages/Results";
=======
import User from "./components/User"


>>>>>>> ef32042e192936341d296d00bc1001cb9671ddf2

    const App = () => (
    <Router>
      <div>
          <Switch>
            <Route exact path="/home" component={Home}/>
<<<<<<< HEAD
            <Route path="/" component={Results}/>
=======
            <Route exacts path="/signup" component={User}/>
            <Route path="/:id" component={Login}/>
            <Route path="/" component={Login}/>
>>>>>>> ef32042e192936341d296d00bc1001cb9671ddf2
            {/* {hasRole(user, ["user"]) && <Route exact path="/" Component={<Wrapper/>}/>} */}
            {/* {!hasRole(user, ["user"]) && <Route path="/" Component={<UserLogin/>}/>}  */}
          </Switch>
      </div>
    </Router>
    )
export default App;
