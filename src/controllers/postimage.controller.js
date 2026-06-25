const PostImage = require("../models/postImage");

const createPostImage = async (req, res) => {
  try {
    const image = await PostImage.create(req.body);
    res.status(201).json(image);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPostImages = async (req, res) => {
  try {
    const images = await PostImage.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createPostImage,
  getPostImages
};