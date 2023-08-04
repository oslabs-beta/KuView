const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const UserController = {
  async createUser(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const newUser = await User.create({
        username,
        email,
        password,
      });
      res.locals.user = newUser;
      return next();
    } catch (err) {
      return next({
        log: 'An error occurred within the createUser found in userController',
        status: 400,
        message: {
          err: 'An error occurred while trying to create a new user.',
        },
      });
    }
  },

  async getUser(req, res, next) {
    try {
      const { username, password } = req.body;
      const foundUser = await User.findOne({
        username,
      });
      console.log('foundUser: ', foundUser);
      // compare passwords
      const hashedPass = foundUser.password;
      // boolean to check if string is equal to hashed password
      const passOk = await bcrypt.compare(password, hashedPass);
      if (passOk) {
        res.locals.user = foundUser;
        return next();
      } else {
        return next({
          log: 'Failed credentials',
          status: 400,
          message: { err: 'Failed matching user credentials' },
        });
      }
    } catch {
      return next({
        log: 'An error occurred within the getUser controller found in userController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to find user.' },
      });
    }
  },
};

module.exports = UserController;
