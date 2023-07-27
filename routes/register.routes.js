const app = require('express').Router()
const { register, handleRegister } = require('../services/register.service');

app.get('/register', register)
app.post('/handleRegister', handleRegister)
module.exports = app