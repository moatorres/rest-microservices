const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', menssage: 'Books API running' })
})

app.get('/api/v1/books', async (req, res) => {
  try {
    const books = await Book.find({})
  } catch (error) {
    console.error(error)
  }
})

module.exports = app
