require('dotenv').config()
const express = require('express');
const UserController = require('./app/Controllers/UserController')

const app = express();
app.use(express.json())

app.post('/users', UserController.store)

app.listen(3333, () => {
    console.log('listening on port 3333')
})