const {Router}  = require('express')
const {userModel} = require("../db")
const {userMiddleware} = require("../middlewares/userMiddleware")
const bcrypt = require('bcrypt');
const userRouter = Router();
const jwt = require('jsonwebtoken');
require("dotenv").config();


userRouter.post('/signup',async (req, res) => {
    const {email,password,firstName,lastName} = req.body;
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await userModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        });
        res.status(201).json({message: 'User created successfully'})
    }catch(e){
        res.status(401).json({message: 'Some error occurred'})
    }
})


userRouter.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        if(user){
            const token = jwt.sign({
                id: user._id
            },process.env.JWT_USER_PASSWORD)

            res.json({
                token: token
            })
        }
        res.status(200).json({ message: "Login Successful"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


userRouter.post('/purchases',userMiddleware,async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;
    const purchases = await purchaseModel.find({
        userId
    })
    res.json({
        purchases
    })
})

module.exports = {
    userRouter: userRouter
}