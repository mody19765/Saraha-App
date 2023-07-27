const { home } = require('../services/home.service')

const app = require('express').Router()

app.get('/', home)


module.exports = app