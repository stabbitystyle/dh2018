import React, { Component } from 'react';
import './App.css';
import BottomBar from './BottomBar';
import ImageCarousel from './ImageCarousel';
import TopNavbar from './TopNavbar';
import BookShelf from './bookShelf';
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
          <BookShelf/>
        </header>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
