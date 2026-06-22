const Post = require("../models/Post");
const User = require("../models/User");

const createPost = async (req, res) => {
  try {
    const { usuario, description, images, tags } = req.body;

    const post = await Post.create({
      usuario,
      description,
      images: images || [],
      tags: tags || []
    });

    res.status(201).json(post);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("usuario")
      .populate("tags");

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFeed = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    const posts = await Post.find({
      usuario: { $in: user.siguiendo }
    })
      .populate("usuario")
      .populate("tags");

    res.json(posts);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getFeed
};