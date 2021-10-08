const express = require('express')

const TwitchService = require('../services/twitch')

function twitchApi(app) {
	const router = express.Router()
	app.use('/api/twitch', router)

	const twitchService = new TwitchService()

	router.get('/user/:username', async function(req, res, next) {
		const { username } = req.params
		try {
			const user = await twitchService.getUser({ username })
			res.status(200).json({
				message: 'User retrieved',
				data: user
			})
		} catch (error) {
			next(error)
		}
	})

	router.post('/user/:username', async function(req, res, next) {
		const { username: user } = req.params
		try {
			const createdUserId = await twitchService.saveUser({ user })
			res.status(201).json({
				message: 'User created in RDB',
				data: createdUserId
			})
		} catch (error) {
			next(error)
		}
	})
}

module.exports = twitchApi