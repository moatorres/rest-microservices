const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model

const bookSchema = new Schema(
  {
    name: String,
    category: String,
    author_url: String,
  },
  {
    timestamps: true,
  }
)

module.exports = Model('Book', bookSchema)
