const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFav = await Favorite.findByPk(id);
    if (!deletedFav) {
      return res.status(404).json({ error: "Favorito no encontrado." });
    }
    await deletedFav.destroy();
    const allFavs = await Favorite.findAll();
    res.status(200).json({ favorites: [...allFavs] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
