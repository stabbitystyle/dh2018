import React, { Component } from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel';
import TopNavbar from './TopNavbar';
import OptionButton from './OptionButton';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const MainPage = () => (
  <Router>
    <div>

    <hr />

      <Route exact path="/" component={Home} />
      <Route path="/start" component={Start} />
      <Route path="/settings" component={Settings} />
    </div>
  </Router>
);

  const Home = () => (
    <div className="Home">
    <Link to="/start"><button type="button" class="btn btn-primary btn-lg">Start</button></Link>
    <Link to="/settings"><button type="button" class="btn btn-primary btn-lg">Start</button></Link>
    </div>
  )
  const Start = () => (
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
      </div>
  )

  const Settings = () => (
    <div>
      Hello!
    </div>
  )





export default MainPage;
