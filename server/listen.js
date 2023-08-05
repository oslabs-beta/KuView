require('dotenv').config();
const app = require('./server.js');

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
