const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController.js');
const cookieController = require('../controllers/cookieController.js');

router.post(
  '/signup',
  userController.createUser,
  dashboardController.createDashboard,
  dashboardController.updateUID,
  (req, res) => {
    console.log('Hello from userRoutes post');
    return res.status(201).json(res.locals.updatedUser);
  }
);

router.post('/login', userController.getUser, (req, res) => {
  console.log('Hello from userRoutes get');
  return res.status(201).json(res.locals.user);
});

// router.delete('/:user', userController.deleteUser, (req, res) => {
//   console.log('Hello from userRoutes delete');
//   return res.status(200).json(res.locals.user);
// });

// router.put('/:email/:password', userController.updateUser, (req, res) => {
//   console.log('hello from userRoutes update');
//   return res.status;
//   (200).json(res.locals.user);
// });

module.exports = router;
