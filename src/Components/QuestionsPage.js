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
           Get Your Money!
         </button>
         <IframeQuestions></IframeQuestions>
       </div>
    );
  }
}

export default QuestionsPage;
