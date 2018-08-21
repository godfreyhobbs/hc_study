import React, { Component } from "react";
import "./App.css";
import Consent from "./Components/Consent";
import getWeb3 from "./utils/getWeb3";
import contract from "truffle-contract";
import linniaHubJSON from '@linniaprotocol/linnia-smart-contracts/build/contracts//LinniaHub.json';
import linniaPermissionsJSON from '@linniaprotocol/linnia-smart-contracts/build/contracts//LinniaPermissions.json';

// import linniaRecordsHub from './contracts/LinniaRecords.json';
import StartPage from "./Components/StartPage";
import MainHeader from "./Components/Header";
import ScreeningResults from "./Components/ScreeningResults";
import GrantAccessForScreening from "./Components/GrantAccessForScreening";
import QuestionsPage from "./Components/QuestionsPage";
import PaymentPage from "./Components/PaymentPage";
import ethUtil from "ethereumjs-util";
import Eth from "ethjs";
import consentTxt from "./consent.json";

window.Eth = Eth;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publicEncryptKey: '',
      currentPage: 'Start',
      destinationAddrs: [],
      web3: null,
      hubInstance: null,
      recordsInstance: null,
      permissionsInstance: null,
      accounts: [],
      searchResultJSON: {},
      requestConsent: true,
    };
  }

  componentDidMount() {

    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3
       .then(results => {
         this.setState({
           web3: results.web3,
         });

         // Instantiate contract once web3 provided.
         this.instantiateContract();
       })
       .catch(e => {
         console.log('Error finding web3.');
       });
  }

  setCurrentPage = (newCurrentPage) => {
    this.setState({currentPage: newCurrentPage});
  }

  instantiateContract() {

    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library like redux, but for convenience I've placed them here.
     */
    const LinniaHubRopstenAddress = '0x177bf15e7e703f4980b7ef75a58dc4198f0f1172';

    const linniaHub = contract(linniaHubJSON);
    linniaHub.setProvider(this.state.web3.currentProvider);

    this.state.web3.version.getNetwork(console.log);

    this.state.web3.eth.getAccounts((error, accounts) => {
      if (error) {
        console.error(error);
      } else {
        let userAccount = accounts[0].toLowerCase();
        fetch('http://18.222.147.7:3000/records?owner=' + userAccount)
           .then(response => response.json())
           .then(myJson => {
             console.log(myJson);
             const searchResultJSON = myJson[0];
             this.setState({searchResultJSON});

             linniaHub
                .at(LinniaHubRopstenAddress)
                .then(hubInstance => {
                  this.setState({
                    hubInstance,
                    accounts,
                  });
                  return hubInstance.permissionsContract();
                })
                .then(result => {
                  let tmpContract = contract(linniaPermissionsJSON);
                  tmpContract.setProvider(this.state.web3.currentProvider);
                  const permissionsInstance = tmpContract.at(result);
                  this.setState({
                    permissionsInstance,
                  });
                });
           });
      }
    });
  }

  consent = () => {

    const constentText = consentTxt.text; //'This Informed Consent Form has two parts:• Information Sheet (to share information about the research with you)• Certificate of Consent (for signatures if you agree to take part)You will be given a copy of the full Informed Consent Form';
    var msg = ethUtil.bufferToHex(new Buffer(constentText, 'utf8'));
    var from = this.state.web3.eth.accounts[0];

    console.log('CLICKED, SENDING PERSONAL SIGN REQ');

    // Now with Eth.js
    var eth = new Eth(this.state.web3.currentProvider);

    eth.personal_sign(msg, from)
       .then((signed) => {
         console.log('Signed!  Result is: ', signed);
         this.setState({requestConsent:false});
       });

  }

  render() {
    return (
      <div className='App'>
        <MainHeader />
        {(this.state.requestConsent) && <Consent consent={this.consent} />}
        {(!this.state.requestConsent)&&(this.state.currentPage === 'Start') && <StartPage callback={this.setCurrentPage} />}
        {(this.state.currentPage === 'GrantAccess') &&
        <GrantAccessForScreening callback={this.setCurrentPage} web3={this.state.web}
          permissionsInstance={this.state.permissionsInstance}
          accounts={this.state.accounts} searchResultJSON={this.state.searchResultJSON} />}
        {(this.state.currentPage === 'ScreeningResults') &&
        <ScreeningResults callback={this.setCurrentPage} />}
        {(this.state.currentPage === 'Questions') &&
        <QuestionsPage callback={this.setCurrentPage} />}
        {(this.state.currentPage === 'Payment') &&
        <PaymentPage callback={this.setCurrentPage} />}

      </div>
    );
  }
}

export default App;
