const { Favorite } = require("../DB_connection");

const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findAll();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los favoritos",
      message: error.message,
    });
  }
};

module.exports = getFavorites;
