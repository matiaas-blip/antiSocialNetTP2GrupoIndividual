const User = require("../models/User");

const login = async (req, res) => {
  try {
    const usuario = req.body.usuario?.trim().toLowerCase();
    const clave = req.body.clave?.trim();

    const user = await User.findOne({ usuario });

    console.log("BODY:", req.body);
    console.log("USER:", user);

    if (!user) {
      return res.status(400).json({
        error: "Usuario o contraseña incorrectos",
      });
    }

    if (user.clave.trim() !== clave) {
      return res.status(400).json({
        error: "Usuario o contraseña incorrectos",
      });
    }

    return res.json({
      _id: user._id,
      usuario: user.usuario,
      email: user.email,
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { login };