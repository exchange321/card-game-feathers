/**
 * Created by Wayuki on 05-Mar-17.
 */
import React, { PropTypes } from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

import feathersSub from '../../common/feathersSub.jsx';

import avatarImg from '../../../images/avatar.png';

const OnlinePlayers = ({ onlineUsers }) => (
  <div className="online-players">
    <List>
      { onlineUsers.map(user => (
        <ListItem
          key={user.userId}
          disabled
          leftAvatar={(
            <Avatar src={avatarImg} />
          )}
        >
          { user.profile.playerName }
        </ListItem>
      )) }
    </List>
  </div>
);

OnlinePlayers.propTypes = {
  onlineUsers: PropTypes.arrayOf(PropTypes.shape({
    profile: PropTypes.shape({
      playerName: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default feathersSub('onlineUsers')(OnlinePlayers);
