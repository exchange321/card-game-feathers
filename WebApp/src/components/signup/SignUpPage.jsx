/**
 * Created by Wayuki on 26-Feb-17.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Recaptcha from '../common/Recaptcha.jsx';

import * as signUpActions from '../../actions/signUpActions';

@connect(
  ({ signUpPage }) => ({
    ...signUpPage
  }),
  dispatch => ({
    actions: bindActionCreators(signUpActions, dispatch),
  }),
)
class SignUpPage extends Component {
  static propTypes = {
    credential: PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      confirmPassword: PropTypes.string.isRequired,
      playerName: PropTypes.string.isRequired,
    }).isRequired,
    processing: PropTypes.shape({
      processingSubmit: PropTypes.bool.isRequired,
    }).isRequired,
    errMsg: PropTypes.objectOf(PropTypes.string.isRequired),
    actions: PropTypes.shape({
      setErrorMessage: PropTypes.func.isRequired,
      handleFormFieldChange: PropTypes.func.isRequired,
      handleFormSubmit: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentWillUnmount() {
    this.props.actions.setErrorMessage({});
  }

  handleFormFieldChange = (e) => {
    const { name: key, value } = e.target;
    this.props.actions.handleFormFieldChange(key, value);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.actions.handleFormSubmit();
  };

  handleRecaptchaCallback = (response) => {
    this.props.actions.handleFormFieldChange('recaptcha', response);
  };

  render() {
    const {
      credential: {
        email,
        password,
        confirmPassword,
        playerName,
      },
      processing: {
        processingSubmit,
      },
      errorMsg,
    } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="sign-up-container">
          <div className="sign-up">
            <h1 className="text-center">Sign Up</h1>
            <form onSubmit={this.handleFormSubmit}>
              <TextField
                floatingLabelText="Email Address"
                name="email"
                type="text"
                disabled={processingSubmit}
                value={email}
                onChange={this.handleFormFieldChange}
                errorText={errorMsg.email || ''}
                fullWidth
              />
              <TextField
                floatingLabelText="Player Name"
                name="playerName"
                disabled={processingSubmit}
                value={playerName}
                onChange={this.handleFormFieldChange}
                errorText={errorMsg.playerName || ''}
                fullWidth
              />
              <TextField
                floatingLabelText="Password"
                name="password"
                type="password"
                disabled={processingSubmit}
                value={password}
                onChange={this.handleFormFieldChange}
                errorText={errorMsg.password || ''}
                fullWidth
              />
              <TextField
                floatingLabelText="Confirm Password"
                name="confirmPassword"
                type="password"
                disabled={processingSubmit}
                value={confirmPassword}
                onChange={this.handleFormFieldChange}
                errorText={errorMsg.confirmPassword || ''}
                fullWidth
              />
              <Recaptcha
                verifyCallback={this.handleRecaptchaCallback}
                onloadCallback={() => {}}
                errorText={errorMsg.recaptcha || ''}
              />
              <div className="btn-container text-center mt-3">
                <RaisedButton
                  label={processingSubmit ? "Signing Up..." : "Sign Up"}
                  type="submit"
                  disabled={processingSubmit}
                  primary
                />
              </div>
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SignUpPage;
