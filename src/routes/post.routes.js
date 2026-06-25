const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  getFeed,
  getPostById,
  deletePost,
} = require("../controllers/post.controller");

const validatePost = require("../middleware/validatePost");

router.post(
  "/",
  validatePost,
  createPost
);

router.get(
  "/",
  getPosts
);

router.get(
  "/feed/:userId",
  getFeed
);

router.get(
  "/:id",
  getPostById
);

router.delete(
  "/:id",
  deletePost
);



module.exports = router;