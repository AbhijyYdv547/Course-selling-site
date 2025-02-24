const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
})

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
})

const purchaseSchema = new Schema({
    courseId: ObjectId,
    userId: ObjectId
})

const courseModel = mongoose.model('courses', courseSchema);
const userModel = mongoose.model('users', userSchema);
const adminModel = mongoose.model('admins', adminSchema);
const purchaseModel = mongoose.model('purchases', purchaseSchema);


module.exports = { userModel, courseModel, adminModel, purchaseModel };