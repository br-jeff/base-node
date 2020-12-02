const express = require('express')
const routes = express.router()
const publicRoute = require('./routes') 

routes.use(publicRoute)

module.exports = routes;