const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    clave: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    seguidores: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],

    siguiendo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);