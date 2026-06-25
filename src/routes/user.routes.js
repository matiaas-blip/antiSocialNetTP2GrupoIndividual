const express = require("express");
const router = express.Router();



const {
  createUser,
  getUsers,
  followUser,
  getUserById,
  updateUser,
  deleteUser
} = require("../controllers/user.controller");

const validateUserExist = require("../middleware/validateUserExist");

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById,validateUserExist);
router.put("/:id", updateUser,validateUserExist);
router.delete("/:id", deleteUser,validateUserExist);

router.post("/follow", followUser);

module.exports = router;