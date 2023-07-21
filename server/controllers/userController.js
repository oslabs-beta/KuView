const User = require('../models/userModel');

const UserController = {
  async createUser(req, res, next) {
    try {
      console.log('create user in userController');

      const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
      });
      res.locals.user = newUser;
      return next();
    } catch (err) {
      console.log('logging error from userController');
      return next({
        log: 'An error occurred within the userController',
        status: 400,
        message: {
          err: 'An error occurred while trying to create a new user.',
        },
      });
    }
  },

  async getUser(req, res, next) {
    try {
      console.log('logging from getUser');
      console.log('req params looks like: ', req.params);
      const foundUser = await User.findOne({
        email: req.params.email,
        password: req.params.password,
      });

      res.locals.user = foundUser;
      return next();
    } catch {
      return next({
        log: 'An error occurred wuthin the getUser controller found in userController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to find user.' },
      });
    }
  },

  async updateUser(req, res, next) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { email: req.params.email },
        { email: req.body.email },
        { password: req.params.password },
        { password: req.body.password },
        { new: true }
      );

      res.locals.user = updatedUser;
      next();
    } catch {
      return next({
        log: 'An error occurred within the updateUser controller found in userController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to update user.' },
      });
    }
  },

  async deleteUser(req, res, next) {
    try {
      const deletedUser = User.findOneAndDelete(
        { email: req.params.email },
        { password: req.params.password }
      );

      res.locals.user = deletedUser;
      next();
    } catch {
      return next({
        log: 'An error occurred within the deleteUser controller found in userController.js.',
        status: 400,
        message: { err: 'An error occurred when trying to delete user.' },
      });
    }
  },
};

module.exports = UserController;
