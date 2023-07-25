const CookieController = {
  verifyUser: (req, res, next) => {

    if (req.cookies.ssid) res.locals.haveCookie = req.cookies.ssid
    return next()

    // User
    //   .findOne({ grafid: req. })
    //   .then((result) => {
    //     if(!result) res.redirect(302, '/signup')
    //     console.log('userid', result._id)
    //     res.locals.id = result._id;
    //     next();
    //   })
    //   .catch((err) => next(err));
  }
}

module.exports = CookieController;