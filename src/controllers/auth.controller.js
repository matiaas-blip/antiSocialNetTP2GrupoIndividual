const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    console.log("BODY LOGIN:", req.body);
    
    
    const { email } = req.body;
    const password = req.body.password

    if (!email || !password) {
      return res.status(400).json({
        error: "Faltan email o clave",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        error: "Usuario no existe",
      });
    }

    console.log("USER COMPLETO:", user);
    console.log("PASSWORD GUARDADA:", user.password);
    console.log("TIPO PASSWORD DB:", typeof user.password);
    console.log("PASSWORD DB:", user.password);
    console.log("ENTRÓ A LOGIN OK");
    console.log("USER:", user);
    console.log("PASSWORD OK:", password === user.password);

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(400).json({
        error: "Clave incorrecta",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      user: {
        _id: user._id,
        email: user.email,
        usuario: user.usuario,
      },
      token,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }

};

const register = async (req, res) => {
  try {
    const { usuario, email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      usuario,
      email,
      password: hashed,
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  login,
  register
};