/**
 * Created by Wayuki on 05-Mar-17.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

import avatarImg from '../../../images/avatar.png';

const PlayerBlock = ({ user }) => (
  <div className="player">
    <ListItem
      disabled
      leftAvatar={(
        <Avatar src={avatarImg} />
      )}
    >
      { user.profile.playerName }
    </ListItem>
  </div>
);

PlayerBlock.propTypes = {};

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProps)(PlayerBlock);
