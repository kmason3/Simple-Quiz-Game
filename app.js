const express = require('express')
const bodyParser = require('body-parser')

const store = require('./store')

const app = express()
app.use(express.static(''public'))
app.use(bodyParser.json())
app.post('/createUser', (req, res)=>{


})
