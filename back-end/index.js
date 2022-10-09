const express = require('express')
const app = express()
app.use(express.json());

let users = []

app.get('/', (req, res) => {
    res.send('<h1>Block Party Backend API</h1><br /><p>Welcome to the Block Party Backend!!!</p>')
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    users.push(req.body)
    res.send('POST request to the homepage')
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})