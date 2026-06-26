const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  getFeed,
  getPostById,
  deletePost,
  getPostsByUser
} = require("../controllers/post.controller");

const validatePost = require("../middleware/validatePost");
const auth = require("../middleware/auth.middleware.js");

router.post("/", validatePost, createPost);
router.get("/", getPosts);
router.get("/feed/:userId", getFeed);
router.get("/:id", getPostById);
router.delete("/:id", auth, deletePost);
router.get("/user/:userId", getPostsByUser);

module.exports = router;