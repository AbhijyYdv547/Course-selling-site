const {Router}  = require('express')
const { adminModel } = require('../db');
const adminRouter = Router();

adminRouter.post('/signin', async (req, res) => {
    const {email,password,firstName,lastName} = req.body;
    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    });
})

adminRouter.post('/signup', async (req, res) => {
    const {email,password} = req.body;
    let admin = await adminModel.findOne({
        email: email,
        password: password
    })
    if(admin){
        res.status(200).json({message: 'Login Successful', user})
    }else{
        res.status(401).json({message: 'Invalid credentials'})
    }
 
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