const app = require('express').Router()
const messageModel = require('../models/message.models')
const userModel = require('../models/user.models')
const { user } = require('../services/user.service')


app.get('/user/:id',user)

module.exports = app