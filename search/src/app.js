const fetch = require('node-fetch')
const express = require('express')
// Bad Practice: using duplicated models from other services
// Good Practice: turn models into NPM package then import across services
const Video = require('./models/video')
const Book = require('./models/book')
const app = express()

app.get('/', (req, res) => {
  res.json({ msg: 'search' })
})

app.get('/api/v1/search', async (req, res) => {
  const videosPromise = Video.find({})
  const booksPromise = Book.find({})
  const promises = [videosPromise, booksPromise]
  const [videos, books] = await Promise.all(promises)

  res.json(videos.concat(books))
})

app.get('/api/v1/search/dependencies', async (req, res) => {
  try {
    const videoPromise = fetch('http://videos:3000/')
    const bookPromise = fetch('http://books:3000/')
    const promises = [videoPromise, bookPromise]
    const [videoResponse, bookResponse] = await Promise.all(promises)
    const videoJson = await videoResponse.json()
    const bookJson = await bookResponse.json()

    res.json({ videos: videoJson, books: bookJson })
  } catch (e) {
    res.status(500).json(e)
  }
})

module.exports = app
