const express = require("express");
const router = express.Router();

const {
  login,
  register
} = require("../controllers/auth.controller");

const validateLogin = require("../middleware/validateLogin.js");
const validateRegister = require("../middleware/validateRegister.js");

router.post(
  "/login",
  validateLogin,
  login
);

router.post(
  "/register",
  validateRegister,
  register
);

module.exports = router;