const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    descripcion: {
      type: String,
      required: true
    },
    
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
      }
    ],
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }]

  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);