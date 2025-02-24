const {Router}  = require('express')

const userRouter = Router();

userRouter.post('/signin', (req, res) => {
    res.send('Hello, World!');
})

userRouter.post('/signup', (req, res) => {
    res.send('Hello, World!');
})

userRouter.post('/purchases', (req, res) => {
    res.send('Hello, World!');
})

module.exports = {
    userRouter: userRouter
}