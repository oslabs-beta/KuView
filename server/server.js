const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const userController = require('./controllers/userController');
const userRoutes = require('./routes/userRoutes.js');

// handle parsing request body
app.use(cors()); //Handles cors errors.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//to the user routes
app.use('/users', userRoutes);

// if (process.env.NODE_ENV === 'production') {
//   // statically serve everything in the build folder on the route '/build'
//   app.use('/build', express.static(path.join(__dirname, '../build')));
//   // serve index.html on the route '/'
//   app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../index.html'));
//   });
// }

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// post method for user to db
app.post('/signup', userController.createUser, (req, res) => {
  console.log('--entering post method for route--');
  return res.status(200).json(res.locals.newUser);
});

// Always send the index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

/**
 * global express error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

module.exports = app;
