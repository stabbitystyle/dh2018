import React, { Component } from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel';
import TopNavbar from './TopNavbar';
import OptionButton from './OptionButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MainPage = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a><OptionButton><Link to="/settings"></Link></OptionButton></a>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={Settings} />
    </div>
  </Router>
);

  const Home = () => (
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
  )

  const Settings = () => (
    <div>
      Hello!
    </div>
  )





export default MainPage;
