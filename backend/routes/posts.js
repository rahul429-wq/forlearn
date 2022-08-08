const express = require("express");
const {
  newPost,
  getAllPosts,
  getSinglePost,
  deletePost,
  updatePost,
} = require("../controllers/postController");
const router = express.Router();
const Post = require("../model/postModel");

// GET all posts
router.get("/", getAllPosts);

// GET a single post
router.get("/:id", getSinglePost);

// POST a a new post
router.post("/", newPost);

// DELETE a post
router.delete("/:id", deletePost);

// UPDATE a post
router.patch("/:id", updatePost);

module.exports = router;
