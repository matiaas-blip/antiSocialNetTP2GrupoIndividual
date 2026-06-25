const express = require("express");
const router = express.Router();

const {
  createComment,
  getCommentsByPost,
  hideComment,
  deleteComment,
} = require("../controllers/comment.controller");

router.post("/", createComment);
router.get("/post/:postId", getCommentsByPost);
router.delete("/:id", deleteComment);
router.patch("/:id/hide", hideComment);

module.exports = router;