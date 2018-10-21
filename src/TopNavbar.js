import React, { Component } from 'react';
import './TopNavbar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import MainPage from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TopNavbar extends Component {
    render() {
        return (
            <Navbar>
            <Navbar.Header>
            <Link to="/"><Navbar.Brand href="#">DubReader</Navbar.Brand></Link>
            </Navbar.Header>
            <Nav>
                <Link to="/"><button type="button" class="btn btn-primary btn-lg">Home</button></Link>
            </Nav>
            </Navbar>
        )
    }
}

export default TopNavbar;