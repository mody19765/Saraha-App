const app = require('express').Router()
const userModel = require('../models/user.models')
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');
const { login, handleLogin } = require('../services/login.service');

app.get('/login', login)
app.post('/handleLogin', handleLogin)

module.exports = app
    












// app.post('/handleLogin', async (req, res) => {
//     const { email, password } = req.body
//     let user = await userModel.findOne({ email })
//     const match = true

//     if (user) {
//         if (match) {
//             req.session.userID = user._id
//             req.session.name = user.name
//             req.session.isLoggedIn = true
//             if (user.confirmed == false) {
//                 res.redirect('/login')
//             } else {
//                 res.redirect('/messages')
//             }
//         } else {
//             res.redirect('/login')
//         }
//     } else {
//         res.redirect('/login')
//     }
// })

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'ahmedsamir18824@gmail.com',
//         pass: 'A987654321s',
//     },
// });

// app.get('/forget', (req, res) => {
//     res.render('forget.ejs', { isLoggedIn: req.session.isLoggedIn })
// })

// app.post('/send', async (req, res) => {
//     const {email} =req.body
//     var token = jwt.sign({email}, 'SK');

//     let options = {
//         from: '"Node.js Team" <ahmedsamir18824@gmail.com>',
//         to: req.body.email,
//         subject: "Hello ✔", // Subject line
//         html: `
//         <div style="background-color:#bbf;color:red;padding:140px">
//         <h1><a href="http://localhost:3000/reset/${token}">click to confirmation</a></h1>
//         </div>
//         `,
//     }
//     let info = await transporter.sendMail(options, (err) => {
//         if (err) {
//             console.log('error');
//         } else {
//             console.log('email has been sent');
//         }
//     });
//     res.redirect('/login')
// })

// app.get('/reset/:token', async (req, res) => {
//     res.render('reset-password.ejs', { isLoggedIn: req.session.isLoggedIn })
// })

// app.post('/reset/:token', async (req, res) => {
//     let token = req.params.token
//     jwt.verify(token, 'SK', async function(err, decoded) {
//        await userModel.findOneAndUpdate({email: decoded.email}, {password: req.body.newPassword})
//       });
//     res.redirect('/login')
// })
