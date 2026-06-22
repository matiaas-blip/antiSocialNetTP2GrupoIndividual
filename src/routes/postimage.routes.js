const express = require("express");
const router = express.Router();

const {
  createPostImage,
  getImagesByPost
} = require("../controllers/postImage.controller");

router.post("/", createPostImage);
router.get("/post/:postId", getImagesByPost);

module.exports = router;