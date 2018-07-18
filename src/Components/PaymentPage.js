import React, { Component } from 'react';
import Header from './Header';
import '../App.css';

class PaymentPage extends Component {


  handleClick() {
    this.props.callback("GrantAccess");
  }

    render() {
    return (
      <div>
        <div>
          <h1>Promise of Payment</h1>
          <p>You will be paid to account {this.props.account} within 2 business days.</p>

          <p>Study Number: 12345</p>
          <p>Participant ID: 123</p>
        </div>
      </div>
    );
  }
}

export default PaymentPage;
