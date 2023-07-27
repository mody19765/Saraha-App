module.exports.home=(req, res) => {
    res.render('index.ejs',{isLoggin:req.session.isLoggin})
}