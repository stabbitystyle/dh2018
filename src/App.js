import React, { Component } from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel';
import TopNavbar from './TopNavbar';
import OptionButton from './OptionButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopNavbar></TopNavbar>
        <header className="App-header">
          <ImageCarousel></ImageCarousel>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        <OptionButton/>
      </div>
    );
  }
}

export default App;
