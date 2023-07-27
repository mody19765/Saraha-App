const app = require('express').Router()
const messageModel = require('../models/message.models')
const { messages, handleUser } = require('../services/messages.service')
app.get('/messages',messages)
app.post("/handleUser/:id",handleUser)

module.exports = app






// app.get('/messages', async (req, res) => {
//     let messages = await messageModel.find({ userID: req.session.userID })
//     let fullPath = req.protocol + '://' + req.headers.host + '/user/' + req.session.userID
//     if (req.session.isLoggedIn == true) {
//         res.render('messages.ejs', { name: req.session.name, fullPath, messages, isLoggedIn: req.session.isLoggedIn })

//     } else {
//         res.redirect('/login')
//     }
// })

// app.get('/logout', (req, res) => {
//     req.session.destroy(()=>{
//         res.redirect('/login')
//     })
// })
