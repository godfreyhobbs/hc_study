import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../logo.svg';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Viel Cornwell Medical School</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Department of Epidemiology
          </NavItem>
          <NavItem eventKey={2} href="#">
            Department of Genetic Medicine
          </NavItem>
          <NavDropdown eventKey={3} title="More Information" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>About Us</MenuItem>
            <MenuItem eventKey={3.2}>Staff</MenuItem>
            <MenuItem eventKey={3.3}>Contact</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Home Page</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
