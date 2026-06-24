const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const conectarDB = require("./config/database.js");

const app = express();

const swaggerDoc = YAML.load(path.join(__dirname, "swagger.yaml"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(cors({
  origin: "http://localhost:5173"
}));


const usersRouter = require("./routes/user.routes.js");
const postsRouter = require("./routes/post.routes.js");
const postImagesRouter = require("./routes/postImage.routes.js");
const tagsRouter = require("./routes/tag.routes.js");
const commentsRouter = require("./routes/comment.routes.js");
const authRoutes = require("./routes/auth.routes.js");


dotenv.config();

app.use(express.json());

app.use("/postimages", postImagesRouter);


app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

conectarDB();

app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/tags", tagsRouter);
app.use("/comments", commentsRouter);
app.use("/auth", authRoutes);


const PORT = process.env.PORT || 3000;

module.exports = app;