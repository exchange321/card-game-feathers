/**
 * Created by Wayuki on 05-Mar-17.
 */
const mongoose = require('mongoose');

const logUser = (app, user) => {
  app.service('users').find({ query: { _id: user._id } }).then((data) => {
    if (data.total) {
      return app.service('onlineUsers').find({ query: { userId: user._id } });
    }
  }).then((data) => {
    if (!data.total) {
      app.service('onlineUsers').create({
        userId: mongoose.Types.ObjectId(user._id),
        profile: user.profile,
      });
    }
  });
};

const logoutUser = (app, user) => {
  app.service('onlineUsers').find({ query: { userId: user._id } }).then((data) => {
    if (data.total) {
      data.data.forEach((targetUser) => {
        app.service('onlineUsers').remove(targetUser._id);
      });
    }
  });
};

module.exports.logUser = logUser;
module.exports.logoutUser = logoutUser;