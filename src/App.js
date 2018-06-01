import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './scripts/NavBar/nav';
<<<<<<< HEAD
import Post from './scripts/PostFeed/post'
=======
import Template from "./scripts/Template/template"
>>>>>>> a2b64afa9381c8840a1112582599faa299f8547e

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
<<<<<<< HEAD
          <Post/>
=======
        <div>
            <Template />
        </div>
>>>>>>> a2b64afa9381c8840a1112582599faa299f8547e
      </div>
    );
  }
}

export default App;
