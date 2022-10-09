//Initialize Express Application
const express = require('express')
const app = express()
// Middleware
app.use(express.json());
// Include MongoDB connection and connect
const database_obj = require('./database/connect');
// perform a database connection when the server starts
database_obj.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
});

// Get the homepage, will have basic information
app.get('/', (req, res) => {
    res.send('<h1>Block Party Backend API</h1><br /><p>Welcome to the Block Party Backend!!!</p>')
})

// Get all users
app.get('/users', (req, res) => {
    const dbConnect = database_obj.getDb();
    dbConnect
        .collection("users")
        .find({}).limit(50)
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send("Error fetching listings!");
            } else {
                res.json(result);
            }
    });
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