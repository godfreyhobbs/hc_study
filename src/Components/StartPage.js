import React, { Component } from 'react';
import StudyDescription from './StudyDescription';
import '../App.css';

class StartPage extends Component {

  handleClick() {
    this.props.callback("GrantAccess");
  }

  render() {
    return (
      <div>
        <StudyDescription></StudyDescription>
        <button onClick={(e) => this.handleClick(e)}>
          Start Screening
        </button>
      </div>
    );
  }
}

export default StartPage;
