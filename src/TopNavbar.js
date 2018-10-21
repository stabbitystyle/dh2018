import React, { Component } from 'react';
import './TopNavbar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class TopNavbar extends Component {
    render() {
        return (
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand href="#">
                Cool Dubhacks Project
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">Link #1</NavItem>
                <NavItem eventKey={2} href="#">Link #2</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            </Navbar>
        )
    }
}

export default TopNavbar;