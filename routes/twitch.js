const express = require('express')

function twitchApi(app) {
	const router = express.Router()
	app.use('/api/twitch', router)

	
}

module.exports = twitchApi