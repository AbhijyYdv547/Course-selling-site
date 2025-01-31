const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


const Course = new Schema({
    description: String,
    isDone: Boolean,
    userId: ObjectId
})

const User = new Schema({
    email: {type:String, unique:true},
    password: String,
    name: String
})

const TodoModel = mongoose.model('courses', Course);
const UserModel = mongoose.model('users', User);

module.exports = { UserModel,TodoModel };