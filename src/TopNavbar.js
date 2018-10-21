import React, { Component } from 'react';
import './TopNavbar.css';
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from "react-router-dom";

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