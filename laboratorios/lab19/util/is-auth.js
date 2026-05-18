module.exports = (res, req, next) => {
    if(! req.session.isLoggedIn){
        return res.redirect("/usuarios/login");
    }

    next();
};