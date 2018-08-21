import * as PropTypes from "prop-types";
import React from "react";

function Consent(props) {
  return (<div>
    <button onClick={props.consent}>Digitally Sign Consent</button><h1>
    <a target="_blank" href="./consent.txt">Print or download the consent form for your records</a></h1>
  </div>);
}

Consent.propTypes = { consent: PropTypes.func };

export default Consent;
