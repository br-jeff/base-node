const express = require('express')
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.json('Home Route')
})

module.exports = routes