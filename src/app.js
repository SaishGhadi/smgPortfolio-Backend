const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./routes')
const { errorHandler } = require('./middlewares/error.middleware')

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api', routes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Error handler
app.use(errorHandler)

module.exports = app
