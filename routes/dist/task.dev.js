"use strict";

var express = require('express');

var router = express.Router();

var TaskController = require('../controllers/TaskController');

router.post('/', function (req, res, next) {
  try {
    TaskController.GetTasks(req.session.User._id, function (data) {
      res.json(data);
    });
  } catch (err) {
    res.status(500);
  }
});
module.exports = router;