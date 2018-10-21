import React, { Component } from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel';
import TopNavbar from './TopNavbar';
import OptionButton from './OptionButton';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, MenuItem, SplitButton } from 'react-bootstrap';



const MainPage = () => (
  <Router>
    <div>
<<<<<<< HEAD
=======
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a><OptionButton><Link to="/about"></Link></OptionButton></a>
        </li>
      </ul>
>>>>>>> ade06b493ab4d069677196c6ce1d29a946d5fb45

    <hr />

      <Route exact path="/" component={Home} />
<<<<<<< HEAD
      <Route path="/start" component={Start} />
      <Route path="/settings" component={Settings} />
=======
      <Route path="/about" component={Options} />
>>>>>>> ade06b493ab4d069677196c6ce1d29a946d5fb45
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

  const wellStyles = { maxWidth: 600, margin: '0 auto 10px' };
  const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];


  const Options = () => (
    <div className="well" style={wellStyles}>
        <Button bsStyle="primary" bsSize="large" justified>Select Read In Language </Button>
          <SplitButton bsStyle="Info" bsSize="large" justified title="choose here">
              <MenuItem eventKey="2">English</MenuItem>
              <MenuItem eventKey="3">Spanish</MenuItem>
              <MenuItem eventKey="4">French</MenuItem>
              </SplitButton>
            <p></p>
        <Button bsStyle="primary" bsSize="large" justified >Select Output language</Button>
          <SplitButton title="choose here">
              <MenuItem eventKey="2">English</MenuItem>
              <MenuItem eventKey="3">Spanish</MenuItem>
              <MenuItem eventKey="4">French</MenuItem>
              </SplitButton>
          <p></p>
      <Button bsStyle="primary" bsSize="large" justified>Select Narrator </Button>
          <SplitButton title="choose here">
              <MenuItem eventKey="2">Morgan Freeman</MenuItem>
              <MenuItem eventKey="3">David Attenborough</MenuItem>
              <MenuItem eventKey="4">James Earl Jones</MenuItem>
              </SplitButton>
          <p></p>

      <Button bsStyle="primary" bsSize="large" block>back </Button>


    </div>
  )





export default MainPage;
