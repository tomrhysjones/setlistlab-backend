const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const songRoutes = require('./routes/songRoutes')
const setlistRoutes = require('./routes/setlistRoutes')

const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/songs', songRoutes)
app.use('/api/setlists', setlistRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err.message))

app.get('/', (req, res) => {
  res.send('SetlistLab API running')
})

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})