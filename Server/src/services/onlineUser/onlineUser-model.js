'use strict';

// onlineUser-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const onlineUserSchema = new Schema({
  userId: { type: Schema.ObjectId, required: true, unique: true },
  profile: {
    playerName: {
      type: String,
      required: true,
    },
  },
});

const onlineUserModel = mongoose.model('onlineUser', onlineUserSchema);

module.exports = onlineUserModel;