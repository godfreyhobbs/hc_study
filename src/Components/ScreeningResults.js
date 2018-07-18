import React, { Component } from 'react';

class ScreeningResults extends Component {

  handleClick() {
    this.props.callback("Questions");
  }

  render() {
    return (
      <div>
        <h1 className="App-title">Screening Results</h1>
        <p>Congratulations! You are eligible for this study.</p>
        <button onClick={(e) => this.handleClick(e)}>
          Start Questionnaire</button>
      </div>
    );
  }
}
export default ScreeningResults;
