const express = require('express')
const sessionsRoutes= express()
sessionsRoutes.use(express.json())

const SessionsControlers = require('../controllers/SessionsControlers') 

const AppError = require('../utils/AppError')

const sessionsControler = new SessionsControlers()

sessionsRoutes.post('/sessions', sessionsControler.createSession)

module.exports = sessionsRoutes
