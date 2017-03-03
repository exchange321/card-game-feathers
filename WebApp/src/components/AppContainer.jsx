import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

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
      hasNotification: PropTypes.bool.isRequired,
      messageType: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
      setNotification: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidUpdate() {
    if (this.props.notification.hasNotification) {
      const {
        notification: {
          messageType,
          message,
        },
        actions: {
          setNotification,
        }
      } = this.props;
      toastr[messageType](message);
      setNotification(false, 'info', '');
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default AppContainer;
