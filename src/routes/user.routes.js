const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  followUser
} = require("../controllers/user.controller");

router.post("/", createUser);
router.get("/", getUsers);

router.post("/follow", followUser);

module.exports = router;