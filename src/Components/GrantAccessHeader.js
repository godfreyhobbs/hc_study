import React, { Component } from 'react';
import logo from '../logo.svg';

class GrantAccessHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Grant Access For Screening</h1>
      </header>
    );
  }
}
export default GrantAccessHeader;
