require('dotenv').config()

const config = {
	dev: process.env.NODE_ENV !== 'production',
	port: process.env.PORT,
	//MYSQL
	rdbUser: process.env.RDB_USER,
	rdbPassword: process.env.RDB_PASSWORD,
	rdbHost: process.env.RDB_HOST,
	rdbPort: process.env.RDB_PORT,
	rdbName: process.env.RDB_NAME,
	//MONGODB
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
	dbPort: process.env.DB_PORT,
	dbName: process.env.DB_NAME,
	//API-TWITCH
	baseUrl: process.env.BASE_URL,
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	accessToken: process.env.ACCESS_TOKEN
}

module.exports = { config }