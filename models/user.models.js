const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:String,
    email: String,
    password: String,
    imageURL: String, 
    confirmed: {type: Boolean, default: false}
})

module.exports = mongoose.model('user', userSchema)