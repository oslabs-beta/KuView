const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const UserController = {
  async createUser(req, res, next) {
    try {
      console.log('create user in userController');
      console.log(req.body);
      const { username, email, password } = req.body;
      // consider adding an error if using an email that's already registered
      const newUser = await User.create({
        username,
        email,
        password,
      });
      res.locals.user = newUser;
      return next();
    } catch (err) {
      console.log('logging error from userController');
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
      console.log('logging from getUser');
      console.log('req body: ', req.body);
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

  // async updateUser(req, res, next) {
  //   try {
  //     const updatedUser = await User.findOneAndUpdate(
  //       { email: req.params.email },
  //       { email: req.body.email },
  //       { password: req.params.password },
  //       { password: req.body.password },
  //       { new: true }
  //     );

  //     res.locals.user = updatedUser;
  //     next();
  //   } catch {
  //     return next({
  //       log: 'An error occurred within the updateUser controller found in userController.js.',
  //       status: 400,
  //       message: { err: 'An error occurred when trying to update user.' },
  //     });
  //   }
  // },

  // async deleteUser(req, res, next) {
  //   try {
  //     const deletedUser = User.findOneAndDelete(
  //       { email: req.params.email },
  //       { password: req.params.password }
  //     );

  //     res.locals.user = deletedUser;
  //     next();
  //   } catch {
  //     return next({
  //       log: 'An error occurred within the deleteUser controller found in userController.js.',
  //       status: 400,
  //       message: { err: 'An error occurred when trying to delete user.' },
  //     });
  //   }
  // },
};

module.exports = UserController;
