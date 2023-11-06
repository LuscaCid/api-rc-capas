require('express-async-errors')
const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user.routes.js')
const app = express()
app.use(cors())

app.use(userRoutes)




const PORT = 5555
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}` ))