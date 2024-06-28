const express = require('express');
const app = express();
const cors = require('cors');

// Sample data (users array)
let users = [
    {"name": "john", "email": "hello@gmail.com", "userName": "johny"},
    {"name": "vishnu", "email": "vishnu.cse21@gmail.com", "userName": "hello"},
    {"name": "sooraj", "email": "sooraj@gmail.com", "userName": "sooraj"}
];

// Middleware
app.use(cors());
app.use(express.json());

// GET endpoint to fetch all users
app.get('/users', function(req, res) {
    res.json(users);
});

// POST endpoint to handle signup form submission
app.post('/signup', function(req, res) {
    const newUser = req.body;
    
    // Check if username already exists
    const usernameExists = users.some(user => user.userName === newUser.username);

    if (usernameExists) {
        // Username already exists, return an error response
        res.status(400).json({ error: 'Username already exists' });
    } else {
        // Username does not exist, add the user to the array
        users.push(newUser);
        res.json(newUser); // Respond with the newly added user
    }
});

// Listen on port 5001
app.listen(5002, function() {
    console.log("Listening on port 5002");
});