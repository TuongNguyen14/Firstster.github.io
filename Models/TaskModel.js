var mongoose = require('mongoose');

mongoose.connect(process.env.ConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TaskSchema = new Schema({
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
}, { collection: 'Task' });
var TaskModel = module.exports = mongoose.model("Task", TaskSchema);