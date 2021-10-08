const db = require('mongoose')
const { config } = require('../config')
const uri = `mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`
console.log(uri);
//?retryWrites=true&w=majority

db.Promise = global.Promise

async function connect() {
	console.log('MongoDB prepare')
	await db.connect(uri)
	console.log('MongoDB Connected')
}

module.exports = connect