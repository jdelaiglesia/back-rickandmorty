const { Favorite } = require("../DB_connection");
const express = require("express");

const server = express();
server.use(express.json());

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ error: "Faltan datos." });
  }
  const newFavorite = await Favorite.findOrCreate({
    where: {
      id,
      name,
      origin,
      status,
      image,
      species,
      gender,
    },
    defaults: { id, name, origin, status, image, species, gender },
  });
  const allFavorites = await Favorite.findAll();
  return allFavorites;
};

module.exports = postFav;
