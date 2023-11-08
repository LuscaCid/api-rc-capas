
require('express-async-errors')
const express = require('express')
const cors = require('cors')
const clientsRoutes = require('./routes/clients.routes.js')
const userRoutes = require('./routes/user.routes.js')
const sessionsRoutes = require('./routes/sessisons.routes.js')
const AppError = require('./utils/AppError.js')

const app = express()
app.use(cors())

app.use(sessionsRoutes)
app.use(userRoutes)
app.use(clientsRoutes)

app.use((error, req, res, next)=> {
    if(error instanceof AppError){
        return res.status(error.status).json({
            message : error.message,
            status : error.status
        })
    }
    return res.status(500).json({
        message : "internal server error",
        status : 500
    })
})


const PORT = 5555
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}` ))