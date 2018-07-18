import React, { Component } from 'react';
import Header from './Header';
import '../App.css';

class GrantAccessForScreening extends Component {
  render() {
    return (
      <div>
        <Header text="Grant Access For Screening"></Header>
        <div className="terms-and-conditions">
          <p>Some information to grant access to Viel Cornwell to use your data.</p>
          <p>Something about you understand how we will use data, when and where</p>
          <p>We won't hold your data or something, but look at it to see if you are eligble, etc.</p>
        </div>

        <div className="medical-summary">
          <div className="FHIR-docs">FHIR Docs</div>
          <div className="medical-overview">Medical Record Summary</div>
          <div className="hospital">Joe's Hospital</div>
        </div>

        <p>Hey, man I understand and agree to share my Medical Record info with Viel Cornwell</p>
        <button>I Agree</button>

      </div>
    );
  }
}

export default GrantAccessForScreening;