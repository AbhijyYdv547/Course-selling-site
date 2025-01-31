const express = require("express");

// Start the server
const app = express();
app.use(express.json());

// User middleware
function UserMiddleWare(req, res, next) {

}

// Admin middleware
function AdminMiddleWare(req, res, next) {

}

// Routes for user endpoints
app.use(UserMiddleWare);
app.get('/courses', (req, res) => {
    res.send('Hello, World!');
})

app.get('/user/signin', (req, res) => {
    res.send('Hello, World!');
})

app.post('/user/signup', (req, res) => {
    res.send('Hello, World!');
})

app.post('/user/purchases', (req, res) => {
    res.send('Hello, World!');
})

app.get('/course/purchase', (req, res) => {
    res.send('Hello, World!');
})


// Routes for admin endpoints

app.use(AdminMiddleWare);

app.get('/admin/signin', (req, res) => {
    res.send('Hello, World!');
})

app.post('/admin/signup', (req, res) => {
    res.send('Hello, World!');
})

app.post('/admin/create-course', (req, res) => {
    res.send('Hello, World!');
})

app.post('/admin/delete-course', (req, res) => {
    res.send('Hello, World!');
})

app.post('/admin/add-course-content', (req, res) => {
    res.send('Hello, World!');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})