const { User } = require("../DB_connection");
const express = require("express");

const server = express();
server.use(express.json());

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Faltan datos" });
    } else {
      [newUser, created] = await User.findOrCreate({
        where: { email, password },
        default: { email, password },
      });
      res.status(201).json({ newUser });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
