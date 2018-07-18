import React, { Component } from 'react';
import Header from './Header';
import StudyDescription from './StudyDescription';
import '../App.css';

class StartPage extends Component {
  render() {
    return (
      <div>
        <StudyDescription></StudyDescription>
        <button>Start Screening</button>
      </div>
    );
  }
}

export default StartPage;
