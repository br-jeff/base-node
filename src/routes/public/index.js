const express = require('express')
const routes = express.Router()

const homeRoutes = require('./home.route')
const loginRoutes = require('./login.route')

routes.use(loginRoutes,homeRoutes)

module.exports = routes