const express = require('express');
const router = express.Router();
const testingController = require('../controllers/testingController');

router.get('/minikube', testingController.minikube, (req, res) => {
  return res.status(200).json(res.locals.result);
});
router.get('/testgrafana', testingController.testGrafana, (req, res) => {
  return res.status(200).json(res.locals.result);
});
module.exports = router;
