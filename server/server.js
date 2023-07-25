const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();
// const PORT = 3000;
const userController = require('./controllers/userController');
const userRoutes = require('./routes/userRoutes.js');
const db = require('./database/db.config.js');
db();
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

//set a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('username', res.locals.user, { maxAge: 3600000, httpOnly: true });
  res.send('Cookie set successfully!');
});

//get the value of the cookie
app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username;
  res.send('Username: ${username}');
});

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
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
  // console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

module.exports = app;
