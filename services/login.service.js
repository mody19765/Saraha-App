const userModels = require("../models/user.models")
const bcrypt =require('bcrypt')

module.exports.login=(req, res) => {
    res.render('login.ejs',{isLoggin:req.session.isLoggin})
}

module.exports.handleLogin= async(req, res) => {
  const { email, password} = req.body
  let user = await userModels.findOne({email})
  req.session.isLoggin=false
  if (user) {
    const match = await bcrypt.compare(password, user.password)
    if (match) {
        req.session.userid=user._id
        req.session.name=user.name
        req.session.isLoggin=true
          res.redirect("/messages")
      }
      else {
        res.redirect("/login")
      }
  }
  else {
    res.redirect("/login",)
  }  
}

