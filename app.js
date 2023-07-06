require("./db/connect");

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const coonectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

const port = 5000;

const start = async () => {
  try {
    await coonectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
