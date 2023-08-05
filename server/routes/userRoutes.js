const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const dashboardController = require('../controllers/dashboardController.js');
<<<<<<< HEAD

=======
const installController = require('../controllers/installController.js');
>>>>>>> dev

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

router.post('/login', userController.getUser, (req, res, next) => {
  return res.status(200).json(res.locals.user);
});

// handles automatic instilation, port forwarding and creates a grafana dashboard for the user.
router.post(
  '/sendgraf',
  installController.installFunc,
  installController.portFoward,
  dashboardController.createDashboard,
  dashboardController.updateUID,
  (req, res) => {
    return res.status(200).json(res.locals.updatedUser);
  }
);
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
