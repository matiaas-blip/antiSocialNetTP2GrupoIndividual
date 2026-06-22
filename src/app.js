const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const conectarDB = require("./config/database.js");

// ROUTES
const usersRouter = require("./routes/user.routes.js");
const postsRouter = require("./routes/post.routes.js");

// CONFIG
dotenv.config();

const app = express();
app.use(express.json());

// Permitir acceso a archivos estáticos (UPLOADS)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware simple de log (opcional pero suma nota)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

conectarDB();

app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

app.use("/user", usersRouter);
app.use("/post", postsRouter);


const PORT = process.env.PORT || 3000;

module.exports = app;