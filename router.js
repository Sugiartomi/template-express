 const route = require('express').Router()
const Controller = require('./controllers')

 route.get("/", Controller.test)




module.exports = route