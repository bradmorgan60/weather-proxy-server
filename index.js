const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()


const PORT = process.env.PORT || 1600

const app = express()

// enable cors
app.use(cors())

// Create static folder
app.use(express.static('public'))

//Routes
app.use('/api', require('./routes'))



app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
