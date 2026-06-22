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

    images: [
      {
        type: String
      }
    ],

    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);