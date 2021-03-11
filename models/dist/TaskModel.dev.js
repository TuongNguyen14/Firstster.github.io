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
var TaskSchema = new Schema({
  Id: ObjectId,
  UserId: String,
  Name: String,
  Status: Number,
  Content: String,
  Type: Number,
  ProjectId: String,
  CreateBy: String,
  CreateDate: Date,
  UpdateBy: String,
  UpdateDate: Date,
  StartDate: Date,
  EndDate: Date
}, {
  collection: 'Task'
});
var TaskModel = module.exports = mongoose.model("Task", TaskSchema);