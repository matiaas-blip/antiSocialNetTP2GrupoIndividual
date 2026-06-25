const express = require("express");
const router = express.Router();

const {
  createPostImage,
  getPostImages
} = require("../controllers/postImage.controller");

router.post("/", createPostImage);
router.get("/", getPostImages);

module.exports = router;