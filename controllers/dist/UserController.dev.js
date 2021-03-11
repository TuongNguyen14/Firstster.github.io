"use strict";

var UserModel = require("../models/UserModel");

var encrypt = require("../security");

var model = require("../models/ResponseModel");

module.exports.GetUserByUsernamePassword = function GetUserByUsernamePassword(inusername, inpassword, callback) {
  inpassword = encrypt.EncryptPassword(inpassword);
  UserModel.findOne({
    username: inusername
  }, function (err, user) {
    if (user && user.password === inpassword) {
      model.type = 1;
      model.message = "success";
      model.data = user;
    } else if (user) {
      model.type = 2;
      model.message = "Incorrect password please try again";
      model.data = null;
    } else {
      model.type = 2;
      model.message = "Incorrect username or password please try again";
      model.data = null;
    }

    callback(model);
  });
};

module.exports.CreateUser = function CreateUser(user, callback) {
  UserModel.find({
    username: user.Username
  }, function (err, user) {
    if (user != null) {
      callback("Username already existed");
    } else UserModel.find({
      email: user.Email
    }, function (err, user) {
      if (user != null) {
        callback("Email already existed");
      } else UserModel.create({
        username: user.Username,
        password: user.Password,
        fullname: user.Fullname,
        email: user.Email,
        type: 1
      }, function (err, data) {
        if (err) callback(err);else callback();
      });
    });
  });
};

module.exports.DeleteUser = function DeleteUser(id, callback) {
  UserModel.deleteOne({
    _id: id
  }, function (err) {
    if (err) callback(err);
  });
};

module.exports.GetUsers = function GetUsers(params, callback) {
  UserModel.find({}).then(function (data, err) {
    if (data != null) callback(data);
    if (err) console.log(err);
  })["catch"](function (e) {
    console.log(e);
  });
};

module.exports.GetUserById = function GetUserById(userId) {
  UserModel.findById(userId, function (data, err) {
    if (data != null) callback(data);
    if (err) callback(err);
  });
};

module.exports.UpdateUserSession = function UpdateUserSession(sessionId, userId, callback) {
  UserModel.findByIdAndUpdate(userId, {
    sessionId: sessionId
  }, function (err) {
    if (err) callback(err);
  });
};