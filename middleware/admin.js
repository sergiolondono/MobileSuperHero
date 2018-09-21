
module.exports = function(req, res, next){
    if(!req.user.isAdmin) return res.status().send('Access denied.');

    next();
}