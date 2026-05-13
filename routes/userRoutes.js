const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

const User = require("../models/User");

router.get(
  "/all-users",
  authMiddleware,
  roleMiddleware("admin"),

  async (req, res) => {

    const users = await User.find();

    res.json(users);
  }
);

router.get(
  "/profile",
  authMiddleware,

  async (req, res) => {

    const user = await User.findById(req.user.id);

    res.json(user);
  }
);

module.exports = router;