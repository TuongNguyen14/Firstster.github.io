"use strict";

var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost:27017/MongoDb';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var ProjectSchema = new Schema({
  Id: ObjectId,
  Name: String
}, {
  collection: 'Project'
});
var ProjectModel = module.exports = mongoose.model("Project", ProjectSchema);