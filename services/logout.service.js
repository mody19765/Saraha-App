const userModels = require("../models/user.models")

module.exports.logout=(req, res) => {
    req.session.destroy(()=> {
        res.redirect('/login')
    })
}