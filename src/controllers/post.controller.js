const Post = require("../models/Post");
const User = require("../models/User");

const createPost = async (req, res) => {
  try {
    const { usuario, descripcion, images, tags } = req.body;

    const post = await Post.create({
      usuario,
      descripcion,
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
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const posts = await Post.find()
      .populate("usuario")
      .populate({
        path: "comments",
        populate: {
          path: "usuario",
          select: "usuario fotoPerfil"
        }
      })
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
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


const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("usuario")
      .populate("tags")
      .populate({
        path: "comments",
        populate: {
          path: "usuario",
          select: "usuario fotoPerfil"
        }
      })

if (!post) {
  return res.status(404).json({
    error: "Post no encontrado"
  });
}

res.json(post);
  } catch (error) {
  res.status(500).json({
    error: error.message
  });
}
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    const userId = req.user.id;

    if (post.usuario.toString() !== userId) {
      return res.status(403).json({
        error: "No tenés permiso para eliminar este post"
      });
    }

    await post.deleteOne();

    res.json({ message: "Post eliminado correctamente" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const posts = await Post.find({
      usuario: userId
    })
      .populate("usuario")
      .populate({
        path: "comments",
        populate: {
          path: "usuario",
          select: "usuario fotoPerfil"
        }
      })
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = {
  createPost,
  getPosts,
  getFeed,
  getPostById,
  deletePost,
  getPostsByUser
};