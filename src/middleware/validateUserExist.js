const User = require("../models/User");

module.exports = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      error: "Usuario no encontrado"
    });
  }

  req.targetUser = user;

  next();
};