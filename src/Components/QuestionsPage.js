import React, {Component} from 'react';
import Header from './Header';
import '../App.css';

class QuestionsPage extends Component {


  handleClick() {
    this.props.callback("Payment");
  }

  render() {
    return (
       <div>
         <Header text="Questions"></Header>
         <div>Insert Google Form here</div>
         <button onClick={(e) => this.handleClick(e)}>
           Submit
         </button>
       </div>
    );
  }
}

export default QuestionsPage;
