const express = require('express')

const db = require('./lib/mongo')()
const { config } = require('./config/index')

const moviesApi = require('./routes/movies')
const twitchApi = require('./routes/twitch')

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandler')
const notFoundHandler = require('./utils/middleware/notFoundHandler')

// app
const app = express()

//Body parser
app.use(express.json())

//Routes
moviesApi(app)
twitchApi(app)

// redirect
app.get('/', function(req, res) {
	res.redirect('/docs')
})

//Catch 404
app.use(notFoundHandler)

//Errors Middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

// init server
const server = app.listen(config.port, function() {
	console.log(`Listening on http://localhost:${server.address().port}`);
})