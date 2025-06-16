// function add(a, b) {
//     return a + b;
// }

// var add = function(a, b) {
//     return a + b;
// }

// var add = (a, b) => {
//     return a + b;
// }

// var add = (a, b) => a + b;

// var result = add(234, 2);

// (function(){
//     console.log("Ashish");
// })();

// function callback() {
//     console.log("Ashish Karakoti")
// }

// const add = function(a, b) {
//     var result = a + b;
//     console.log(result);
//     callback();
// }

// add(3, 4);

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi  ' + user.username + "!\n", () => {
//     console.log("file is created");
// })

// const notes = require('./notes.js');

// var age = notes.age;
// var sum = notes.add(4, 5);

// console.log(age);
// console.log(sum);

// var _ = require('lodash');

// var data = ["person", "person", 1, 2, 1, 2, 'name', 'age', '2'];
// var filter = _.uniq(data);
// console.log(filter);

// const jsonString = '{"name": "Ashish", "Age": 15, "city": "Zirakpur"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// const jsonStringified = JSON.stringify(jsonString);
// console.log(jsonStringified);

const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
require('dotenv').config();

// MongoDB connection
const db = require('./db');

// Passport setup
const passport = require('./auth'); // require your auth file to initialize strategy
const localAuthMiddleWare = passport.authenticate('local', { session: false });

// Body Parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

// Custom Logger Middleware
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
};
app.use(logRequest);

// Initialize passport middleware
app.use(passport.initialize());

// Routes
app.get('/', localAuthMiddleWare, (req, res) => {
    res.send("Welcome to our Restaurant !");
});

// Routers
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// Use routes
app.use('/person', localAuthMiddleWare, personRoutes);
app.use('/menu', menuRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});