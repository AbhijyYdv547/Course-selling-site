const {Router}  = require('express')

const adminRouter = Router();


adminRouter.post('/signin', (req, res) => {
    res.send('Hello, World!');
})

adminRouter.post('/signup', (req, res) => {
    res.send('Hello, World!');
})

adminRouter.post('/create-course', (req, res) => {
    res.send('Hello, World!');
})

adminRouter.post('/delete-course', (req, res) => {
    res.send('Hello, World!');
})

adminRouter.post('/add-course-content', (req, res) => {
    res.send('Hello, World!');
})


module.exports = {
    adminRouter: adminRouter
}