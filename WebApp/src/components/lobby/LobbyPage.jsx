/**
 * Created by Wayuki on 26-Feb-17.
 */
import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import PlayerBlock from './player/PlayerBlock.jsx';
import OnlinePlayers from './onlinePlayers/OnlinePlayers.jsx';

const LobbyPage = () => (
  <div className="content lobby container">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
        <div className="block">
          <div className="btn-container btn-lg-container">
            <RaisedButton
              label="Create New Room"
              fullWidth
              primary
            />
          </div>
        </div>
        <div className="block">
          <PlayerBlock />
        </div>
        <div className="block">
          <OnlinePlayers />
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
        This is rightBlock.
      </div>
    </div>
  </div>
);

LobbyPage.propTypes = {};

export default LobbyPage;
