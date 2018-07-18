import React, { Component } from 'react';
import logo from '../logo.svg';

class ScreeningResults extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Screening Results</h1>

        <p>Congratulations! You are eligible for this study.</p>

        <button>Start Questionnaire</button>
      </header>
    );
  }
}
export default ScreeningResults;