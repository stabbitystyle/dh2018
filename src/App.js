import React, { Component } from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel';
import TopNavbar from './TopNavbar';
import OptionButton from './OptionButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, MenuItem, SplitButton } from 'react-bootstrap';



const MainPage = () => (
  <Router>
    <div>

    <hr />

      <Route exact path="/" component={Home} />
      <Route path="/start" component={Start} />
      <Route path="/options" component={Options} />
    </div>
  </Router>
);

  const Home = () => (
    <div className="Home">
    <Link to="/start"><button type="button" class="btn btn-primary btn-lg">Start</button></Link>
    <Link to="/options"><button type="button" class="btn btn-primary btn-lg">Start</button></Link>
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
        <Button bsStyle="primary" bsSize="large" >Select Read In Language </Button>
          <SplitButton title="choose here">
              <MenuItem eventKey="2">English</MenuItem>
              <MenuItem eventKey="3">Spanish</MenuItem>
              <MenuItem eventKey="4">French</MenuItem>
              </SplitButton>
            <p></p>
        <Button bsStyle="primary" bsSize="large" >Select Output language</Button>
          <SplitButton title="choose here">
              <MenuItem eventKey="2">English</MenuItem>
              <MenuItem eventKey="3">Spanish</MenuItem>
              <MenuItem eventKey="4">French</MenuItem>
              </SplitButton>
          <p></p>
      <Button bsStyle="primary" bsSize="large" >Select Narrator </Button>
          <SplitButton title="choose here">
              <MenuItem eventKey="2">Morgan Freeman</MenuItem>
              <MenuItem eventKey="3">David Attenborough</MenuItem>
              <MenuItem eventKey="4">James Earl Jones</MenuItem>
              </SplitButton>
          <p></p>

      <Link to="/"><button type="button" class="btn btn-primary btn-lg btn-block">back</button></Link>


    </div>
  )





export default MainPage;
