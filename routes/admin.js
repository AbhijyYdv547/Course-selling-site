const {Router}  = require('express')
const { adminModel } = require('../db');
const adminRouter = Router();

adminRouter.post('/signin', (req, res) => {
    res.send('Hello, World!');
})

adminRouter.post('/signup', (req, res) => {
    res.send('Hello, World!');
})

adminRouter.post('/course', (req, res) => {
    res.send('Hello, World!');
})

adminRouter.put('/course', (req, res) => {
    res.send('Hello, World!');
})

adminRouter.get('/course/bulk', (req, res) => {
    res.send('Hello, World!');
})

module.exports = {
    adminRouter: adminRouter
}