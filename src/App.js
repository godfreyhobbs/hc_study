import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import getWeb3 from "./utils/getWeb3";
import contract from "truffle-contract";
import linniaHubJSON from './contracts/LinniaHub.json';
// import linniaPermissions from './contracts/LinniaPermissions.json';
// import linniaRecords from './contracts/LinniaRecords.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      publicEncryptKey: '',
      destinationAddrs: [],
      web3: null,
      hubInstance: null,
      recordsInstance: null,
      accounts: [],
    };
  }

  componentDidMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
       .then(results => {
         this.setState({
           web3: results.web3
         });

         // Instantiate contract once web3 provided.
         this.instantiateContract();
       })
       .catch((e) => {
         console.log("Error finding web3.");
       });
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */
    const linniaHub = contract(linniaHubJSON);
    linniaHub.setProvider(this.state.web3.currentProvider);

    this.state.web3.version.getNetwork(console.log);

    // let hubInstance;
    let recordsInstance;
    //
    this.state.web3.eth.getAccounts((error, accounts) => {

      if(error) {
        console.error(error)
      }

      linniaHub
         .deployed()
         .then(hubInstance => {
           // hubInstance = hubInstance;
           this.setState({
             hubInstance,
             accounts
           })

           // this.updateAddrsBalances(accounts.concat(carolAddr, bobAddr, instance.address));
           return hubInstance.recordsContract();
         }).then(result => {
        recordsInstance = result;
        this.setState({
          recordsInstance
        });
      });
    });
  }

  //
  // updateAddrsBalances = async accounts => {
  //   await _.forEach(accounts, async addr => {
  //     this.state.web3.eth.getBalance(addr, (err, bal) => {
  //       let newBalances = this.state.balances;
  //       newBalances[addr] = bal.toString();
  //       this.setState({balances: newBalances});
  //     });
  //   });
  // };
  //
  render() {
    return (
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo"/>
           <h1 className="App-title">Welcome to H C Study</h1>
         </header>
         <p className="App-intro">
           H C Study
         </p> <p>
         Account: {this.state.accounts[0]}
       </p>
       </div>
    );
  }
}

export default App;