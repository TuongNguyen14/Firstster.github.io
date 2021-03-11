var mongoose = require('mongoose');

mongoose.connect(process.env.ConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProjectSchema = new Schema({
    Id: ObjectId,
    Name: String,
}, { collection: 'Project' });
var ProjectModel = module.exports = mongoose.model("Project", ProjectSchema);