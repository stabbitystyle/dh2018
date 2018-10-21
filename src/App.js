import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BottomBar from './BottomBar';
import ImageCarousel from './ImageCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
<<<<<<< HEAD
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
=======
          <ImageCarousel></ImageCarousel>
          <BottomBar/>
>>>>>>> dev
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
