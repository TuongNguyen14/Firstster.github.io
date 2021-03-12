var TaskModel = require('../models/TaskModel');

module.exports.CreateTask = function CreateTask(user, task, callback) {
    try {
        TaskModel.create({
            Content: task.Content, Type: task.Type,
            CreateBy: user._id, CreateDate: new Date(),
            StartDate: task.StartDate,
            Status: 1,
            UserId: task.UserId,
        }, function () {
            callback();
        });
    }
    catch (err) {
        callback(err);
    }
}

module.exports.UpdateTask = function UpdateTask(user, task, callback) {
    try {
        TaskModel.findByIdAndUpdate(task._id, {
            StartDate: task.StartDate,
            Status: (task.EndDate === null ? 2 : 3),
            UserId: task.UserId,
            UpdateBy: user._id,
            UpdateDate: new Date(),
            EndDate: task.EndDate,
        }, function () {
            callback();
        });
    }
    catch (err) {
        callback(err);
    }
}

module.exports.DeleteTask = function DeleteTask(_id, callback) {
    try {
        TaskModel.findByIdAndDelete(task._id, function () {
            callback();
        });
    }
    catch (err) {
        callback(err);
    }
}

module.exports.GetTasks = function GetTasks(userId, callback) {
    try {
        TaskModel.find({ UserId: userId }, function (data, err) {
            if (data) callback(data);
            else if (err) callback(err);
        });
    }
    catch (err) {
        callback(err);
    }
}