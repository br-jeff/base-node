const express = require('express')
const routes = require('./routes/public')
const cors = require('cors')
const app = express()


app.use(cors)
app.use(routes)
app.use(express.json())

module.exports = app;


