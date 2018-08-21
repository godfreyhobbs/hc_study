import React, {Component} from 'react';
import IframeQuestions from './IframeQuestions';
import '../App.css';

class QuestionsPage extends Component {

  handleClick() {
    this.props.callback("Payment");
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}>
          Completed - proceed to the payment screen
         </button>
        <IframeQuestions />
      </div>
    );
  }
}

export default QuestionsPage;
