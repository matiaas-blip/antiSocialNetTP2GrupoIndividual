const express = require("express");
const router = express.Router();

const {
  createTag,
  getTags
} = require("../controllers/tag.controller");

router.post("/", createTag);
router.get("/", getTags);

module.exports = router;