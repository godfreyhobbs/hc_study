import React, {Component} from 'react';
import '../App.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { css } from 'glamor';

class GrantAccessForScreening extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      dataHash: this.props.searchResultJSON.dataHash,
      // This represents the State University researcher
      viewerAddress: '0x25c63834a9d3cd3c221b7cfbf6b1a02bdffcf0d9',
    };

  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleClick() {
    toast("Once you confirm, your transaction will be processed. This may take several minutes.",{ autoClose: 90000,
      position:'top-center',  bodyClassName: css({
        fontSize: '22px',
      }),
    });

    // Here we are calling the Permission Smart contract Grant access method.
    this.props.permissionsInstance.grantAccess(this.state.dataHash, this.state.viewerAddress, this.props.searchResultJSON.dataUri, {
      from: this.props.accounts[0],
      // TODO: for a real app this is liekly way too much gas.
      gas: 700000,
      gasPrice: 40000000000,
    })
       .then(result => {
         toast.dismiss();
         /*
          TODO: IF this was a real app we would do the following:
            1. fetch dataUri from IPFS
            2. decrypt (do NOT store resulting plain text in a cookie or local storage)
            3. Run eligbility algo on the decrypted plan text
            4. Remove all code references to the private key and plain text in the data (maybe force a page refresh)
           */

         this.props.callback("ScreeningResults");
       })
       .catch(result => {
         console.error(result);
         toast.dismiss();
         toast("ERROR"+result, { autoClose: 90000,
           position:'top-center',  bodyClassName: css({
             fontSize: '20px',
           })});
       });

  }

  render() {
    //TODO: Use real meta data. Here we are faking the data fields such as hostipal
    return (
      <div>
        <ToastContainer />

        <div className='terms-and-conditions'>
          <p>Some information to grant access to State College to use your health data to screen for study eligibility.</p>
          <p>Data will be used by researches for the study</p>
          <p>The researchers will not retain or share your data</p>
        </div>

        <div className='medical-summary'>
          <div className='FHIR-docs'>FHIR Docs</div>
          <div className='medical-overview'>Medical Record Summary FHIR Docs</div>
          <div className='hospital'>Joe's Hospital</div>
          <div className='FHIR-docs'>Metadata:{this.props.searchResultJSON.metadata}</div>
          <div className='medical-overview'>IRIS Score: {this.props.searchResultJSON.irisScore}</div>
          <div className='medical-overview'>Sig Count: {this.props.searchResultJSON.sigCount}</div>
          <div className='medical-overview'>Created At: {this.props.searchResultJSON.createdAt}</div>
          <div className='medical-overview'>Record DataHash: {this.props.searchResultJSON.dataHash}</div>
        </div>

        <p>I understand and agree to the above statements</p>

        <div className='medical-overview'>
          <label htmlFor='privateKey'>Enter the private encryption key for this data:</label>
          <div>
            <input id='privateKey' type='password' value={this.state.value} onChange={this.handleChange} size={64} required />
          </div>
        </div>

        <button onClick={(e) => this.handleClick(e)}>
           I Agree
         </button>
      </div>
    );
  }
}

export default GrantAccessForScreening;
