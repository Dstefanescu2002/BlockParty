const express = require('express')
const app = express()
// Middleware
app.use(express.json());
// MongoDB/Mongoose initialization
const mongoose = require("mongoose");

let users = []

// Get the homepage, will have basic information
app.get('/', (req, res) => {
    res.send('<h1>Block Party Backend API</h1><br /><p>Welcome to the Block Party Backend!!!</p>')
})

// Get all users
app.get('/users', (req, res) => {
    res.json(users)
})

// Add a user
app.post('/users', (req, res) => {
    users.push(req.body)
    res.send('POST request to the homepage')
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})