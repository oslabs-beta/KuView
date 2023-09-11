require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes.js');
const cookieParser = require('cookie-parser');

const db = require('./database/db.config.js');
db();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//to the user routes
app.use('/users', userRoutes);

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.join(__dirname, '../build')));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/', express.static(path.join(__dirname, '../build/')));
}
// serve index.html on the route '/'
app.get('/', (req, res) => {
  console.log('testing');
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Always send the index.html for all other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

//global express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

//if (process.env.NODE_ENV === 'development') {
// // statically serve everything in the build folder on the route '/build'
// app.listen(process.env.PORT, () => {
//   console.log(`Listening on port ${process.env.PORT}`);
// });
//}

module.exports = app;
