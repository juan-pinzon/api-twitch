const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movies = new Schema({
	title: String,
	year: Number,
	cover: String,
	description: String,
	duration: Number,
	contentRating: String,
	source: String,
	tags: [String]
})

const model = mongoose.model('movies', movies)

module.exports = model