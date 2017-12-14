const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressGraphQL = require("express-graphql");
const cors = require("cors");
const schema = require("./schema/schema");

const MONGO_URI = "mongodb://localhost:27017/todos";
const app = express();
const port = 8000;

mongoose.connect(MONGO_URI, {
  useMongoClient: true,
  promiseLibrary: global.Promise
});
mongoose.Promise = global.Promise;
mongoose.connection
  .once("open", () => console.log("Connected to Mongo instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

app.use(cors());
app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.get("/", (req, res) => {
  res.send("welcome to the api");
});

app.listen(port, console.log(`server running at http://localhost:${port}`));
