const express = require('express')
const routes = express.Router()

routes.get('/login',(req,res)=>{
    res.json('Login Route')
})

module.exports = routes