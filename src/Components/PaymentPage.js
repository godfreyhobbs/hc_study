import React, { Component } from 'react';
import '../App.css';

class PaymentPage extends Component {


  handleClick() {
    this.props.callback("GrantAccess");
  }

    render() {
    return (
      <div>
        <div>
          <h3>Promise of Payment</h3>
          <h3>You will be paid to account {this.props.account} within 2 business days.</h3>

          <h3>Study Number: 12345</h3>
          <h3>Participant ID: 123</h3>
        </div>
      </div>
    );
  }
}

export default PaymentPage;
