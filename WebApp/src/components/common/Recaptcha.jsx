/**
 * Created by Wayuki on 03-Mar-17.
 */
import React, { PropTypes } from 'react';
import Recaptcha from 'react-recaptcha';

const CRecaptcha = ({ verifyCallback, onloadCallback, errorText }) => (
  <div>
    <Recaptcha
      sitekey="6LdQhRcUAAAAAFEN3HkgeSSWdcT3cudkhTXzeLYa"
      verifyCallback={verifyCallback}
      onloadCallback={onloadCallback}
      theme="dark"
      render="explicit"
    />
    {
      errorText ? <div className="recaptchaError">{ errorText }</div> : ''
    }
  </div>
);

CRecaptcha.propTypes = {
  verifyCallback: PropTypes.func.isRequired,
  onloadCallback: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
};

export default CRecaptcha;
