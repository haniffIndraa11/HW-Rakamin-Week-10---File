const express = require('express')
const app = express()
const router = require('./routes')
const port = 3000
const errorHandler = require('./middleware/errorHandler.js')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log('Running on port', port)
})