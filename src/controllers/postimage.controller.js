const PostImage = require("../models/postImage");

const createPostImage = async (req, res) => {
  try {
    const image = await PostImage.create(req.body);
    res.status(201).json(image);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getImagesByPost = async (req, res) => {
  try {
    const images = await PostImage.find({
      postId: req.params.postId
    });

    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPostImage,
  getImagesByPost
};