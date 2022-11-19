require("./db/connect");
const express = require("express");
const app = express();
const eswdata = require("./routes/route");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

// routes
app.get("/hello", (req, res) => {
  res.send("Hello");
});

// middleware
app.use(express.json());
app.use("/api/v1/eswdata", eswdata);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 40000;
const connectionString = `mongodb+srv://${process.env.uname}:${process.env.pass}@${process.env.projname}.iwz2amf.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`;
const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(port, "0.0.0.0", () => {
      console.log(`listening to port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
