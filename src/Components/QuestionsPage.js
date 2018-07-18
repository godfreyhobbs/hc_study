import React, { Component } from 'react';
import Header from './Header';
import '../App.css';

class QuestionsPage extends Component {
  render() {
    return (
      <div>
        <Header text="Questions"></Header>
        <div>Google Form</div>
        <button>Submit</button>
      </div>
    );
  }
}

export default QuestionsPages;
