"use strict";

var mongoose = require('mongoose');

mongoose.connect(process.env.ConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var UserSchema = new Schema({
  Id: ObjectId,
  username: String,
  password: String,
  fullname: String,
  email: String,
  type: Number,
  img: String //sessionId: String

}, {
  collection: 'User'
});
var UserModel = module.exports = mongoose.model("User", UserSchema);