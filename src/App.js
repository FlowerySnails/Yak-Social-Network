import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './scripts/NavBar/nav';
import Template from "./scripts/Template/template"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">YAK</h1>
          <div>
          <NavBar />
          </div>
        </header>
        <div>
            <Template />
        </div>
      </div>
    );
  }
}

export default App;
