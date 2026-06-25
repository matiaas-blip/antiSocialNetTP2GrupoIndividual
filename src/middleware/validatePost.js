module.exports = (req, res, next) => {
  const { descripcion } = req.body;

  if (!descripcion) {
    return res.status(400).json({
      error: "La descripción es obligatoria"
    });
  }

  if (descripcion.length > 1000) {
    return res.status(400).json({
      error: "Máximo 1000 caracteres"
    });
  }

  next();
};