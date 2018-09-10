const express = require('express')
const bodyParser = require('body-parser')

const store = require('./store')

const app=express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/creatUser',(req, res) => {

	store
		.createUser({
			username: req.body.username
			password: req.body.password
		})
		.then(() => res.sendStatus(200))
})
 app.listen(7555, () => {
	console.log('ServerRunning on http://localhost:755')
})
