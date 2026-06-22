require("dotenv").config();

const app = require("./app");
const conectarDB = require("./config/database.js");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await conectarDB();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

startServer();