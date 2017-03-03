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

import * as loginActions from '../../actions/loginActions';

@connect(
  ({ loginPage }) => ({
    ...loginPage
  }),
  dispatch => ({
    actions: bindActionCreators(loginActions, dispatch),
  }),
)
class LoginPage extends Component {
  static propTypes = {
    credential: PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }).isRequired,
    processing: PropTypes.shape({
      processingSubmit: PropTypes.bool.isRequired,
    }).isRequired,
    errorMsg: PropTypes.objectOf(PropTypes.string.isRequired),
    actions: PropTypes.shape({
      setErrorMessage: PropTypes.func.isRequired,
      handleFormFieldChange: PropTypes.func.isRequired,
      handleFormSubmit: PropTypes.func.isRequired,
      resetForm: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentWillUnmount() {
    const { setErrorMessage, resetForm } = this.props.actions;
    setErrorMessage('');
    resetForm();
  }

  handleFormFieldChange = (e) => {
    const { name: key, value } = e.target;
    this.props.actions.handleFormFieldChange(key, value);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.actions.handleFormSubmit();
  };

  render() {
    const {
      credential: {
        email,
        password,
      },
      processing: {
        processingSubmit,
      },
      errorMsg,
    } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="auth-container">
          <div className="auth-form">
            <h1 className="text-center">Login</h1>
            <form onSubmit={this.handleFormSubmit}>
              <TextField
                floatingLabelText="Email Address"
                name="email"
                type="email"
                value={email}
                disabled={processingSubmit}
                onChange={this.handleFormFieldChange}
                errorText={errorMsg.error || ''}
                fullWidth
              />
              <TextField
                floatingLabelText="Password"
                name="password"
                type="password"
                value={password}
                disabled={processingSubmit}
                onChange={this.handleFormFieldChange}
                errorText={errorMsg.error || ''}
                fullWidth
              />
              <div className="btn-container text-center mt-3">
                <RaisedButton
                  label={processingSubmit ? 'Logging In...' : 'Login'}
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

export default LoginPage;
