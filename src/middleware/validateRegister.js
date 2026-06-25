module.exports = (req, res, next) => {
  const {
    usuario,
    email,
    password
  } = req.body;

  if (!usuario) {
    return res.status(400).json({
      error: "Usuario requerido"
    });
  }

  if (!email) {
    return res.status(400).json({
      error: "Email requerido"
    });
  }

  if (!password) {
    return res.status(400).json({
      error: "Clave requerida"
    });
  }

  next();
};