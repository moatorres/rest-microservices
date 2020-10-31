const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model

const videoSchema = new Schema(
  {
    name: String,
    category: String,
    youtube_url: String,
  },
  {
    timestamps: true,
  }
)

module.exports = Model('Video', videoSchema)
