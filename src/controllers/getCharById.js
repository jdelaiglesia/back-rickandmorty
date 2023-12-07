const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";
const KEY = "pi-jdelaiglesia";
const getCharById = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const { data } = await axios(`${URL}/${id}`);
    const { name, status, gender, species, origin, image } = data;
    const character = { id, name, status, gender, species, origin, image };
    if (character.name) {
      return res.status(200).json(character);
    } else {
      return res.status(404).send("Not found");
    }
  } catch (e) {
    return res.status(500).json({ e: e.message });
  }
};

module.exports = getCharById;
