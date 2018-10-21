import React, { Component } from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel';
import TopNavbar from './TopNavbar';
import OptionButton from './OptionButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, MenuItem, SplitButton, Jumbotron } from 'react-bootstrap';
import image1 from './book.png';



const MainPage = () => (
    <Router>
        <div>


        <Route exact path="/" component={Home} />
        <Route path="/start" component={Start} />
        <Route path="/options" component={Options} />
        </div>
    </Router>
    );

    const Home = () => (
        <div className="Home">
            <Jumbotron>
                <h1 class="text-center">DubReader</h1>
                    <p class="text-center">
                        Smart Reader through Google Cloud API
                    </p>
                <p class="text-center">
                    <Link to="/start"><button type="button" class="btn btn-primary btn-lg start">Start</button></Link>
                    <Link to="/options"><button type="button" class="btn btn-primary btn-lg">Options</button></Link>
                </p>
            </Jumbotron>
    </div>
    )


    const Start = () => (
        <div className="App">
        <TopNavbar></TopNavbar>
            <header className="App-header">
            <ImageCarousel></ImageCarousel>
            </header>
        </div>
    )

    const wellStyles = { maxWidth: 600, margin: '0 auto 10px' };
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];


    const Options = () => (
        <div className="well" style={wellStyles}>
        <h1 className="text-center">Options</h1>
            <div className="text-center"><SplitButton bsStyle="Info" bsSize="large" justified title="Selcect Read In Language">
                <MenuItem eventKey="2">English</MenuItem>
                <MenuItem eventKey="3">Spanish</MenuItem>
                <MenuItem eventKey="4">French</MenuItem>
                </SplitButton></div>
                <p></p>
            <div className="text-center"><SplitButton bsStyle="Info" bsSize="large" justified title="Select Output language">
                <MenuItem eventKey="2">English</MenuItem>
                <MenuItem eventKey="3">Spanish</MenuItem>
                <MenuItem eventKey="4">French</MenuItem>
                </SplitButton></div>
            <p></p>
            <div className="text-center"><SplitButton bsStyle="Info" bsSize="large" justified title="Choose Narrator        ">
                <MenuItem eventKey="2">Morgan Freeman</MenuItem>
                <MenuItem eventKey="3">David Attenborough</MenuItem>
                <MenuItem eventKey="4">James Earl Jones</MenuItem>
                </SplitButton></div>
            <p></p>

        <div className="text-center"><Link to="/"><button type="button" class="btn btn-primary btn-lg">back</button></Link></div>
        <div className="text-center"><Link to="/start"><button type="button" class="btn btn-primary btn-lg">start</button></Link></div>


        </div>
    ) 





export default MainPage;
