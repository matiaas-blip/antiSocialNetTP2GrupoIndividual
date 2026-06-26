const Comment = require("../models/Comment");
const Post = require("../models/Post");

const createComment = async (req, res) => {
  try {
    console.log("BODY RECIBIDO:", req.body);
    const { texto, usuario, postId } = req.body;

    const comment = new Comment({
      texto,
      usuario,
      post: postId,
    });

    await comment.save();

    await Post.findByIdAndUpdate(
      postId,
      {
        $push: { comments: comment._id }
      }
    );

    const saved = await Comment.findById(comment._id)
      .populate("usuario");

    res.status(201).json(saved);

  } catch (error) {
    console.log("createComment error:", error);
    res.status(500).json({ error: error.message });
  }
};

const getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.find({
      post: req.params.postId,
      visible: true,
    }).populate("usuario");

    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate("usuario")
      .populate("post")
      .sort({ createdAt: -1 });

    res.json(comments);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const hideComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ msg: "Comentario no encontrado" });
    }

    comment.visible = false;
    await comment.save();

    res.json({ msg: "Comentario ocultado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: "Comentario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createComment,
  getCommentsByPost,
  hideComment,
  deleteComment,
  getAllComments,
};