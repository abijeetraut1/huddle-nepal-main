const dotenv = require("dotenv").config({ path: "./config.env" }); // dotenv packaged required and initiliazed on the go
const app = require("./app");
const connectMongoDB = require("./database");

//MongoDb connection
const databaseConnection = process.env.MONGODB_URL.replace(
  '<PASSWORD>',
  process.env.MONGODB_PASSWORD
);

connectMongoDB(databaseConnection);

//Listening on PORT
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running at port , ${PORT}`);
});
