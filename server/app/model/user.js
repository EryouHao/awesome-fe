'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String },
    id: { type: String },
    displayName: { type: String },
    photo: { type: String },
    provider: { type: String },
    accessToken: { type: String },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  });

  return mongoose.model('User', UserSchema);
};
