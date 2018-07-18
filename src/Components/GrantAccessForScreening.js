import React, {Component} from 'react';
import '../App.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { css } from 'glamor';

class GrantAccessForScreening extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataHash: this.props.searchResultJSON.dataHash,
      viewerAddress: '0x25c63834a9d3cd3c221b7cfbf6b1a02bdffcf0d9',
    }

  }

  handleClick() {
    //dummy dummyDataUri
    toast("😎  😎 😎  Wow so easy !!!! 🦄 🦄 🦄",{ autoClose: 90000,
      position:'top-center',  bodyClassName: css({
        fontSize: '60px'
      }),
    });
    const dummyDataUri = 'Qmf4vJySpRoexvPgmiokbsC5p3UjNVs38Dz9TvdDdmAqQP'
    this.props.permissionsInstance.grantAccess(this.state.dataHash, this.state.viewerAddress, dummyDataUri, {
      from: this.props.accounts[0]
    })
       .then(result => {
         toast.dismiss();
         this.props.callback("ScreeningResults")
       })
       .catch(result => {
         console.error(result);
         toast.dismiss();
         toast("ERROR"+result, { autoClose: 90000,
           position:'top-center',  bodyClassName: css({
             fontSize: '20px'
           })});
       });

  }

  render() {
    return (
       <div>
         <ToastContainer/>

         <div className="terms-and-conditions">
           <p>Some information to grant access to Viel Cornwell to use your data.</p>
           <p>Something about you understand how we will use data, when and where</p>
           <p>We won't hold your data or something, but look at it to see if you are eligble, etc.</p>
         </div>

         <div className="medical-summary">
           <div className="FHIR-docs">FHIR Docs</div>
           <div className="medical-overview">Medical Record Summary FHIR Docs</div>
           <div className="hospital">Joe's Hospital</div>
           <div className="FHIR-docs">Metadata:{this.props.searchResultJSON.metadata}</div>
           <div className="medical-overview">IRIS Score: {this.props.searchResultJSON.irisScore}</div>
           <div className="medical-overview">Sig Count: {this.props.searchResultJSON.sigCount}</div>
           <div className="medical-overview">Created At: {this.props.searchResultJSON.createdAt}</div>
           <div className="medical-overview">DataHash: {this.props.searchResultJSON.dataHash}</div>
         </div>

         <p>Hey, man I understand and agree to share my Medical Record info with Viel Cornwell</p>
         <button onClick={(e) => this.handleClick(e)}>
           I Agree
         </button>
       </div>
    );
  }
}

export default GrantAccessForScreening;
