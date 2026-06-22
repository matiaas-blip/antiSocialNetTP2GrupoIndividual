const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  getFeed
} = require("../controllers/post.controller");

router.post("/", createPost);
router.get("/", getPosts);

router.get("/feed/:userId", getFeed);

module.exports = router;