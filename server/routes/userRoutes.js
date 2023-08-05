const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController.js');


router.get('/testing', dashboardController.createDashboard, (req, res) => {
  console.log('Hello from testing post', res.locals.uid);
  return res
    .status(200)
    .json(
      `http://localhost:3000/d/${res.locals.uid}/kuview-2?orgId=1&refresh=5s`
    );
  //
});

router.post(
  '/signup',
  userController.createUser,
  dashboardController.createDashboard,
  dashboardController.updateUID,
  (req, res) => {
    console.log('Hello from userRoutes post');
    return res.status(200).json(res.locals.updatedUser);
  }
);

router.post('/login', userController.getUser, (req, res) => {
  console.log('Hello from userRoutes get');
  return res.status(200).json(res.locals.user);
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
