import * as PropTypes from "prop-types";
import React from "react";

function Consent(props) {
  return <button onClick={props.consent}> Sign Consent </button>;
}

Consent.propTypes = { consent: PropTypes.func };

export default Consent;
