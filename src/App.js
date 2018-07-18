import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import getWeb3 from './utils/getWeb3';
import contract from 'truffle-contract';
import linniaHubJSON from './contracts/LinniaHub.json';
// import linniaPermissions from './contracts/LinniaPermissions.json';
import linniaRecordsHub from './contracts/LinniaRecords.json';

require('dotenv').config();

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
      searchResultJSON: {}
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
       .catch(e => {
         console.log('Error finding web3.');
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
    // let recordsInstance;
    //
    this.state.web3.eth.getAccounts((error, accounts) => {
      if (error) {
        console.error(error);
      } else {
        let userAccount = accounts[0].toLowerCase();
        fetch('http://18.222.147.7:3000/records?owner=' + userAccount)
           .then(response => response.json())
           .then(myJson => {
             console.log(myJson);
             const searchResultJSON = myJson;
             this.setState({searchResultJSON});

             linniaHub
                .at('0xc39f2e4645de2550ee3b64e6dc47f927e8a98934')
                .then(hubInstance => {
                  // hubInstance = hubInstance;
                  this.setState({
                    hubInstance,
                    accounts
                  });

                  // this.updateAddrsBalances(accounts.concat(carolAddr, bobAddr, instance.address));
                  return hubInstance.recordsContract();
                })
                .then(result => {
                  let tmpContract = contract(linniaRecordsHub);
                  tmpContract.setProvider(this.state.web3.currentProvider);
                  const recordsInstance = tmpContract.at(result);
                  this.setState({
                    recordsInstance
                  });
                });
           });
      }
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
