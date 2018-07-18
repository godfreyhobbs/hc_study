import React, {Component} from 'react';

class IframeQuestions extends Component {

  constructor(props) {
    super(props);
    this.questionForm = 'https://docs.google.com/forms/d/1UVUlJlM1hy1wn2_54fuweYm4tkfvUtYycAF8FB8rhxM/viewform?edit_requested=true';
  }

  render() {
    return (
       <div>
         <iframe title="researchQ-iframe" src={this.questionForm} height="3550px" width="90%"/>
       </div>
     );
  }
}

export default IframeQuestions;
