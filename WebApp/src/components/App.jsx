/**
 * Created by Wayuki on 26-Feb-17.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import LogoutIcon from 'material-ui/svg-icons/action/settings-power';
import HomeIcon from 'material-ui/svg-icons/action/home';

import * as appActions from '../actions/appActions';

@connect(
  ({ app }) => ({
    ...app,
  }),
  dispatch => ({
    actions: bindActionCreators(appActions, dispatch),
  }),
)
class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    actions: PropTypes.shape({
      handleLogout: PropTypes.func.isRequired,
    }).isRequired,
  };

  // componentWillUnmount() {
  //   this.props.actions.handleLogout();
  // }

  render() {
    const {
      children,
      actions: {
        handleLogout,
      },
    } = this.props;
    const {
      props: {
        route: {
          title,
        },
      },
    } = children;
    return (
      <div className="app">
        <AppBar
          title={title}
          iconElementLeft={<IconButton><HomeIcon /></IconButton>}
          iconElementRight={(
            <IconButton
              onClick={handleLogout}
              tooltip="Logout"
              tooltipPosition="bottom-center"
            >
              <LogoutIcon />
            </IconButton>
          )}
        />
        { children }
      </div>
    );
  }
}

export default App;
