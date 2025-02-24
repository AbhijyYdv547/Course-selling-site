const express = require('express');
const Router = express.Router();

const courseRouter = Router();

courseRouter.post('/', (req, res) => {
    res.send('Hello, World!');
})

courseRouter.post('/purchases', (req, res) => {
    res.send('Hello, World!');
})

module.exports = {
    courseRouter: courseRouter
}