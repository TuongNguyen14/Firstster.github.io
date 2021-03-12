var ProjectModel = require('../models/ProjectModel');

module.exports.GetProjects = function GetProjects(callback) {
    try {
        ProjectModel.find({}, function (data, err) {
            if (data) callback(data);
            else if (err) callback(err);
        });
    }
    catch (err) {
        callback(err);
    }
}