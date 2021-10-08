const express = require('express')

const MoviesService = require('../services/movies')
const {
  movieIdSchema,
  createMovieSchema,
  updateMoviesSchema,
} = require('../schemas/movies')
const validationHandler = require('../utils/middleware/validationHandler')

function moviesApi(app) {
  const router = express.Router()
  app.use('/api/movies', router)

  const moviesService = new MoviesService()

  router.get('/', async function (req, res, next) {
    const { tags } = req.query
    try {
      const movies = await moviesService.getMovies({ tags })
      res.status(200).json({
        message: 'Movies listed',
        data: movies,
      })
    } catch (error) {
      next(error)
    }
  })

  router.get(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      const { movieId } = req.params
      try {
        const movie = await moviesService.getMovie({ movieId })
        res.status(200).json({
          message: 'Movie retrieved',
          data: movie,
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.post(
    '/',
    validationHandler(createMovieSchema),
    async function (req, res, next) {
      const { body: movie } = req
      try {
        const { _id: createdMovieId } = await moviesService.createMovie({
          movie,
        })
        res.status(201).json({
          message: 'Movie created',
          data: createdMovieId,
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.patch(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMoviesSchema),
    async function (req, res, next) {
      const { movieId } = req.params
      const { body: movie } = req
      try {
        const { _id: updatedMovieId } = await moviesService.updateMovie({
          movieId,
          movie,
        })
        res.status(200).json({
          message: 'Movie updated',
          data: updatedMovieId,
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.delete('/:movieId', validationHandler({ movieId: movieIdSchema }), async function (req, res, next) {
    const { movieId } = req.params
    try {
      const deletedMovie = await moviesService.deleteMovie({ movieId })
      res.status(200).json({
        message: 'Movie deleted',
        data: deletedMovie,
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = moviesApi
