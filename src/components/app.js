import React, { Component } from 'react';
import moment from "moment";
import {
    BrowserRouter as Router,
    Switch,
    Route
}from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home'
import About from './pages/about'


export default class App extends Component {
  render() {
    return (
      <div className='app'>      
        <Router>
        <div>
        <NavigationContainer />

        <Switch>

            <Route exact path="/" compopnent={Home} />
            <Route path="/about-me" compopnent={About} />
        </Switch>
        </div>
        </Router>

        <h1>Hugo Cayeros Portfolio</h1>
        <PortfolioContainer />
    <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
