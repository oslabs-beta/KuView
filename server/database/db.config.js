require('dotenv').config();
const { Pool } = require('mongodb');

const pool = new Pool({
  connectionString: 'insert string here',
  //   connectionString: process.env.MONGO_URI
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callabck),
};
