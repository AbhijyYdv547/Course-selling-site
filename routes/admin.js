const { Router } = require("express");
const { adminModel, courseModel } = require("../db");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const {adminMiddleware} = require("../middlewares/adminMiddleware")
dotenv.config();
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

adminRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });
        res.status(201).json({ message: "User created successfully" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message || "Internal Server Error" });
    }
});


adminRouter.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await adminModel.findOne({ email });

        if (!admin) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const passMatch = await bcrypt.compare(password, admin.password);
        if (!passMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: admin._id }, JWT_ADMIN_PASSWORD, {
            expiresIn: "1h",
        });

        return res.status(200).json({
            message: "Login Successful",
            token,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


adminRouter.post("/course",adminMiddleware,async (req, res) => {
    const adminId = req.userId;
    const {title, description, imageUrl, price} = req.body;
    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId
    })
    res.json({
        message: "Course created successfully",
        courseId:course._id
    })
});

adminRouter.put("/course",adminMiddleware,async (req, res) => {
    const adminId = req.userId;
    const {title, description, imageUrl, price,courseId} = req.body;
    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    },{
        title,
        description,
        imageUrl,
        price
    })
    res.json({
        message: "Course updated successfully",
        courseId:course._id 
    })
});

adminRouter.get("/course/bulk",adminMiddleware,async (req, res) => {
     const adminId = req.userId;
    const courses = await courseModel.find({
        creatorId: adminId
    })
    res.json({
        message: "the courses are :",
        courses
    })
});


module.exports = { adminRouter };
