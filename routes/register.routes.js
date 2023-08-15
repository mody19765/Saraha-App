const app = require('express').Router()
const { register, handleRegister } = require('../services/register.service');
const validation = require('../validation/register.validation')

app.get('/register', register)
app.post('/handleRegister',validation, handleRegister)
module.exports = app
