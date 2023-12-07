const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index");

const server = express();

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use("/rickandmorty", router);

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  next();
});

module.exports = server;
