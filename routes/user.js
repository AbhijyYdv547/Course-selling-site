const {Router}  = require('express')
const {userModel} = require("../db")
const userRouter = Router();

userRouter.post('/signin',async (req, res) => {
    const {email,password,firstName,lastName} = req.body;
    await userModel.create({
        email,
        password,
        firstName,
        lastName
    });
})

userRouter.post('/signup',async (req, res) => {
    const {email,password} = req.body;
    let user = await userModel.findOne({
        email: email,
        password: password
    })
    if(user){
        res.status(200).json({message: 'Login Successful', user})
    }else{
        res.status(401).json({message: 'Invalid credentials'})
    }
})

userRouter.post('/purchases', (req, res) => {
    res.send('Hello, World!');
})

module.exports = {
    userRouter: userRouter
}