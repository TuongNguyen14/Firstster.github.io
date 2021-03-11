var mongoose = require('mongoose');

mongoose.connect(process.env.ConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const UserSchema = new Schema({
    Id: ObjectId,
    username: String,
    password: String,
    fullname: String,
    email: String,
    type: Number,
    img: String,
    //sessionId: String
}, { collection: 'User' });
var UserModel = module.exports = mongoose.model("User", UserSchema);