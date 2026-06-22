const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const followUser = async (req, res) => {
  try {
    const { userId, followId } = req.body;

    if (userId === followId) {
      return res.status(400).json({ msg: "No puedes seguirte a ti mismo" });
    }

    const user = await User.findById(userId);
    const target = await User.findById(followId);

    if (!user || !target) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    if (!user.siguiendo.includes(followId)) {
      user.siguiendo.push(followId);
    }

    if (!target.seguidores.includes(userId)) {
      target.seguidores.push(userId);
    }

    await user.save();
    await target.save();

    res.json({ msg: "Follow realizado correctamente" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  followUser
};