const express = require("express");
const router = express.Router();

const {
  createComment,
  getCommentsByPost,
  hideComment,
  deleteComment,
  getAllComments
} = require("../controllers/comment.controller");

router.post("/", createComment);
router.get("/post/:postId", getCommentsByPost);
router.delete("/:id", deleteComment);
router.patch("/:id/hide", hideComment);
router.get("/", getAllComments);

module.exports = router;