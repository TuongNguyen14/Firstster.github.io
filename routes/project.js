var express = require('express');
var router = express.Router();
var ProjectController = require('../controllers/ProjectController');

router.post('/', function (req, res, next) {
    try {
        ProjectController.GetProjects(function (data) {
            res.json(data);
        })
    }
    catch (err) {
        res.status(500);
    }
});

module.exports = router;