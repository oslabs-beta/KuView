const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.post('/', userController.createUser, (req, res) => {
  console.log('Hello from userRoutes post');
  return res.status(200).json(res.locals.user);
});

router.get('/:user', userController.getUser, (req, res) => {
  console.log('Hello from userRoutes get');
  return res.status(200).json(res.locals.user);
});

router.delete('/:user', userController.deleteUser, (req, res) => {
  console.log('Hello from userRoutes delete');
  return res.status(200).json(res.locals.user);
});

router.put('/:email/:password', userController.updateUser, (req, res) => {
  console.log('hello from userRoutes update');
  return res.status;
  (200).json(res.locals.user);
});

module.exports = router;
