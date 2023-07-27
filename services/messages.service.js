const messageModels = require("../models/message.models");

module.exports.messages=async(req, res) => {

    let messagesd=await messageModels.find({userID:req.session.userid})
    var fullUrl = req.protocol + '://' + req.get('host') ;

    console.log(messagesd);
    if(req.session.isLoggin)
    {
        res.render('messages.ejs',{
            name:req.session.name,
            isLoggin:req.session.isLoggin,
            id:req.session.userid,
            messagesd,
            fullUrl
        })
    }
    else
    {
        res.redirect("/login")
    }
}

module.exports.handleUser=async(req,res) => {
console.log(req.body);
   await messageModels.insertMany({message:req.body.message ,userID:req.params.id})
res.redirect("/user/"+req.params.id)
}