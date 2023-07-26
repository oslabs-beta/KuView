const CookieController = {
  verifyUser: (req, res, next) => {
    try {
      if (req.cookies.ssid) res.locals.haveCookie = req.cookies.ssid;
      return next();
    } catch {
      return next({
        log: 'An error occurred within the verifyCookie controller found in cookieController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to verify cookie.' },
      });
    }
  },
  setCookie: async (req, res, next) => {
    try {
      console.log('grafid', res.locals.user.grafid);
      // res.cookie('ssid', res.locals.user.grafid, {
      //   httpOnly: true,
      //   maxAge: 901239,
      //   domain: 'localhost',
      //   path: '/',
      // });
      return next();
    } catch {
      return next({
        log: 'An error occurred within the setCookie controller found in cookieController.js.',
        status: 400,
        message: { err: 'An error occurred when trying set the cookie.' },
      });
    }
  },
};

module.exports = CookieController;
