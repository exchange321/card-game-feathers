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

@connect(
  ({ loginPage }) => ({
    ...loginPage
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
    errMsg: PropTypes.objectOf(PropTypes.string.isRequired),
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="auth-container">
          <div className="auth-form">
            <h1 className="text-center">Login</h1>
            <form>
              <TextField
                floatingLabelText="Email Address"
                name="email"
                type="email"
                errorText=''
                fullWidth
                required
              />
              <TextField
                floatingLabelText="Password"
                name="password"
                type="password"
                errorText=''
                fullWidth
                required
              />
              <div className="btn-container text-center mt-3">
                <RaisedButton
                  label="Login"
                  type="submit"
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
