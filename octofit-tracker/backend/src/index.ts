import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8000
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit'

mongoose.connect(MONGO)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'OctoFit Tracker backend' })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
