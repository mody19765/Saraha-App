const { logout } = require('../services/logout.service')

const app = require('express').Router()

app.get('/logout', logout)
module.exports = app
