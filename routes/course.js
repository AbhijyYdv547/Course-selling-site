const {Router}  = require('express');
const {userMiddleware} = require('../middlewares/userMiddleware');
const {purchaseModel, courseModel} = require("../db")
const courseRouter = Router();

courseRouter.get('/preview',async (req, res) => {
    const courses = await courseModel.find({});

    res.json({
        courses
    })
})

courseRouter.post('/purchase',userMiddleware,async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;
    // need to check if user has paid for course
    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"You have successfully bought the course"
    })
})

module.exports = {
    courseRouter: courseRouter
}