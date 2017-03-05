import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkThemeBase from 'material-ui/styles/baseThemes/darkBaseTheme';

import Snackbar from 'material-ui/Snackbar';

import * as containerActions from '../actions/containerActions';

@connect(
  ({ container }) => ({
    ...container
  }),
  dispatch => ({
    actions: bindActionCreators(containerActions, dispatch),
  }),
)
class AppContainer extends Component {
  static propTypes = {
    notification: PropTypes.shape({
      open: PropTypes.bool.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
      setNotification: PropTypes.func.isRequired,
      closeNotification: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const {
      notification: {
        open,
        message,
      },
      actions: {
        closeNotification,
      },
    } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkThemeBase)}>
        <div>
          { this.props.children }
          <Snackbar
            open={open}
            message={message}
            autoHideDuration={3000}
            onRequestClose={closeNotification}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppContainer;
