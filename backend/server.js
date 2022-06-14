const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

const app = require('./app');

const database_password = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.MONGO_PASSWORD
);

mongoose
  .connect(database_password)
  .then(() => {
    console.log('database connection sucessfull');
  })
  .catch((err) => {
    console.log(err);
  })

console.log(process.env.NODE_ENV);

const port = 3000 || process.env.port;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
