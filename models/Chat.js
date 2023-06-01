const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: Number,
  },
  username: String,
  displayName: String,
  profilePic: String
});

const MessageSchema = new Schema({
  content: String,
  created: {
    type: Date,
    default: Date.now
  },
  sender: UserSchema
});

const ChatSchema = new Schema({
  id: {
    type: Number,
  },
  users: [UserSchema],
  messages: [MessageSchema]
});

module.exports = mongoose.model('Chat', ChatSchema);