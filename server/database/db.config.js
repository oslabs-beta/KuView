// if (process.env.NODE_ENV != 'production') {
//require('dotenv').config();
// }
require('dotenv').config();

const mongoose = require('mongoose');

async function connectToDb() {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect(
      'mongodb+srv://erennie97:s7jelSMjuFVsOJsb@kuview-users.shwpyh3.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('DB connection complete');
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;
