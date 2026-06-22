const Comment = require("../models/Comment");

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommentsByPost = async (req, res) => {
  try {
    const monthsLimit = process.env.COMMENT_MONTHS || 6;

    const limitDate = new Date();
    limitDate.setMonth(limitDate.getMonth() - monthsLimit);

    const comments = await Comment.find({
      post: req.params.postId,
      visible: true,
      createdAt: { $gte: limitDate }
    }).populate("usuario");

    res.json(comments);

  } catch (error) {
    res.status(500).json({ error: error.message });
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

module.exports = {
  createComment,
  getCommentsByPost,
  hideComment
};