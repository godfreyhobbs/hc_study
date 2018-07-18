import React, { Component } from 'react';
import logo from '../logo.svg';

class MainHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the Viel Cornwell Hookah Study</h2>
      </header>
    );
  }
}

export default MainHeader;
