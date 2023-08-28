const express = require("express");
const userRouter = require("./routes/userRouter");

const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin (*), or you can specify specific origins.
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT,PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });


  app.use(express.json()); 

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }


  app.use("/api/v1/users", userRouter)

  module.exports = app;
