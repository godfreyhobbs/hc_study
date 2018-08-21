import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar fixedBottom>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#home'>State College Medical School</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href='#'>
            Department of Epidemiology
          </NavItem>
            <NavItem eventKey={2} href='#'>
            Department of Genetic Medicine
          </NavItem>
            <NavDropdown eventKey={3} title='More Information' id='basic-nav-dropdown'>
              <MenuItem eventKey={3.1}>About Us</MenuItem>
              <MenuItem eventKey={3.2}>Staff</MenuItem>
              <MenuItem eventKey={3.3}>Contact</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Home Page</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
