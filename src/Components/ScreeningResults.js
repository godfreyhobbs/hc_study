import React, { Component } from 'react';
import logo from '../logo.svg';

class ScreeningResults extends Component {
  render() {
    return (
        <h1 className="App-title">Screening Results</h1>
        <p>Congratulations! You are eligible for this study.</p>
        <button>Start Questionnaire</button>
    );
  }
}
export default ScreeningResults;
