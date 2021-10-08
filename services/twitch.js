const axios = require('axios').default

const MysqlLib = require('../lib/mysql')
const { config } = require('../config')

const headers = {
	'authorization': `Bearer ${config.accessToken}`,
	'client-id': config.clientId,
	'content-type': 'application/json'
}

class TwitchService {

	constructor() {
		this.mysqlDB = new MysqlLib()
	}

	async getUser({ username }) {
		const url = `${config.baseUrl}users?login=${username}`
		const { data: {data: [data]}} = await axios.get(url, {
			headers
		})

		return data
	}

	async saveUser({ user }) {
		const url = `${config.baseUrl}users?login=${user}`
		const { data: {data: [data]}} = await axios.get(url, {
			headers
		})

		if (!data) throw new Error("El usuario ingresado no existe")

		const { id, login: username, display_name, profile_image_url, created_at } = data
		await this.mysqlDB.execute(
			'INSERT INTO users SET ?',
			{ id, username, display_name, profile_image_url, created_at }
		)

		return id
	}
}

module.exports = TwitchService