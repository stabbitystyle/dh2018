import React, { Component } from 'react';
import './App.css';
import TopNavbar from './TopNavbar';
import BottomBar from './BottomBar';
import ImageCarousel from './ImageCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar></TopNavbar>
        <header className="App-header">
          <ImageCarousel></ImageCarousel>
          <BottomBar/>
        </header>
      </div>
    );
  }
}

export default App;
