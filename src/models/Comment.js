const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true
    },

    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    texto: {
      type: String,
      required: true
    },

    visible: {
      type: Boolean,
      default: true
    },

    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

module.exports = mongoose.model("Comment", commentSchema);