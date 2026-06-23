const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  getFeed,
  getPostById,
  deletePost
} = require("../controllers/post.controller");

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.delete("/:id", deletePost)

router.get("/feed/:userId", getFeed);

module.exports = router;