const db = require('mongoose')
const MoviesModel = require('../models/movies')

class MoviesService {

	async getMovies({ tags }) {
		const query = tags && { tags: { $in: tags } }
		//console.log(MoviesModel.schema);
		return await MoviesModel.find(query)
	}

	async getMovie({ movieId }) {
		return await MoviesModel.findById(movieId)
	}

	async createMovie({ movie }) {
		const newMovie = new MoviesModel(movie)
		return await newMovie.save()
	}

	async updateMovie({ movieId, movie }) {
		const movieUpdated = await MoviesModel.findByIdAndUpdate(movieId, movie)
		return movieUpdated
	}

	async deleteMovie({ movieId }) {
		return await MoviesModel.findByIdAndDelete(movieId)
	}

}

module.exports = MoviesService