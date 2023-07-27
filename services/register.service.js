const userModels = require("../models/user.models")
const bcrypt =require('bcrypt')

module.exports.register=(req, res) => {
    res.render('register.ejs',{isLoggin:req.session.isLoggin})
}

module.exports.handleRegister= async(req, res) => {
  const{name,email,password}=  req.body

  const user= await userModels.findOne({email})
   if(user)
   {
    res.redirect('/register',)
   }
   else
   {
    bcrypt.hash(password, 4, async (err, hash) => {
        await userModels.insertMany({ name, email, password: hash})
        res.redirect('/login')
    })

   }

}

