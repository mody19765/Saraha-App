module.exports.user=(req, res) => {
    res.render('user.ejs',{
        isLoggin:req.session.isLoggin,
        name:req.session.name,
        id:req.params.id
    })
}

