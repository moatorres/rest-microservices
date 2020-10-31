const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Videos API running' })
})

app.get('/api/v1/videos', async (req, res) => {
  try {
    const videos = await Video.find({})
  } catch (error) {
    console.error(error)
  }
})

module.exports = app
