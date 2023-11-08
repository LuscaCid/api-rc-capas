const express = require('express')
const ensureAutenticated = require('../middleware/EnsureAutenticated')
const ClientsControllers = require('../controllers/ClientsControllers')
const clientsControllers = new ClientsControllers()

const clientsRoutes = express()
clientsRoutes.use(express.json())
/*ensureAutenticated,*/
clientsRoutes.post('/client/register',  clientsControllers.createClient )


module.exports = clientsRoutes 
