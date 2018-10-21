import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Navbar, ButtonGroup } from 'react-bootstrap';
import MainPage from './App'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class BottomBar extends Component {
    render(){
    return(
        <Navbar>
                <ButtonGroup justified bsSize="large">
                    <Button href='#'>
                        <span class="glyphicon glyphicon-fast-backward" aria-hidden="true"> </span>
                        </Button>
                    <Button href='#'>
                        <Link to="/start2"><span class="glyphicon glyphicon-repeat" aria-hidden="true"> </span></Link>
                        </Button>
                    <Button href='#'>
                        <span class="glyphicon glyphicon-fast-forward" aria-hidden="true"> </span>
                        </Button>
                </ButtonGroup>
        </Navbar>
    )
    }
}


export default BottomBar;