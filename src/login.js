const { User } = require("./DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || !password) {
      return res.status(400).json({ error: "Faltan datos." });
    } else {
      const foundUser = await User.findOne({ where: { email: email } });
      if (!foundUser) {
        return res.status(404).json({ error: "Usuario no encontrado." });
      }
      if (password !== foundUser.password) {
        // return res.status(401).json({ error: "Contrasena incorrecta" });
        return res.status(200).json({ access: false });
      }
      return res.status(200).json({ access: true });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = login;
