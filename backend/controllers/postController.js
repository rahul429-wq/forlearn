const mongoose = require("mongoose");
const Post = require("../model/postModel");

// getall posts : get request
const getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  if (!posts) {
    res.status(400).send("NO POSTS FOUND");
  }
  res.status(200).json(posts);
};

// get single post : get request

const getSinglePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);
  if (!post) {
    res.status(400).send("NO POST FOUND");
  }
  res.status(200).json(post);
};

// new post creation : post request
const newPost = async (req, res) => {
  const { title, description, image, source, alt } = req.body;
  try {
    const post = await Post.create({
      title,
      description,
      image,
      source,
      alt,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete post : delete request

const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete(id);
  if (!post) {
    res.status(400).send("NO POST FOUND");
  }
  res.status(200).json(post);
};
// update post : patch request
const updatePost = async (req, res) => {
  const { id } = req.params;
  //   const { title, description, image, source, alt } = req.body;
  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!post) {
    res.status(400).send("Something went wrong");
  }
  res.status(200).json(post);
};

module.exports = {
  newPost,
  getAllPosts,
  getSinglePost,
  deletePost,
  updatePost,
};
