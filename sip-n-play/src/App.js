// src/App.js
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home_Page from './components/home'
import About_Page from './components/about';
import Nav_Bar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to the testing site </h1>
      </header>
      <Nav_Bar />
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home_Page} />
            <Route exact path="/about" component={About_Page} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );          
};

export default App;
