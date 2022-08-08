const mongoose = require("mongoose");
const Anim = require("../model/animsModel");

// getall Anims : get request
const getAllAnims = async (req, res) => {
  const anims = await Anim.find({}).sort({ createdAt: -1 });
  if (!anims) {
    res.status(400).send("NO POSTS FOUND");
  }
  res.status(200).json(anims);
};

// get single Anim : get request

const getSingleAnims = async (req, res) => {
  const { id } = req.params;

  const anims = await Anim.findById(id);
  if (!anims) {
    res.status(400).send("NO POST FOUND");
  }
  res.status(200).json(anims);
};

// new Anim creation : post request
const newAnims = async (req, res) => {
  const { title, image, link } = req.body;
  try {
    const anims = await Anim.create({
      title,
      image,
      link,
    });
    res.status(200).json(anims);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete anims : delete request

const deleteAnims = async (req, res) => {
  const { id } = req.params;
  const anims = await Anim.findByIdAndDelete(id);
  if (!anims) {
    res.status(400).send("NO POST FOUND");
  }
  res.status(200).json(anims);
};
// update anims : patch request
const updateAnims = async (req, res) => {
  const { id } = req.params;
  //   const { title, description, image, source, alt } = req.body;
  const anims = await Anim.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!anims) {
    res.status(400).send("Something went wrong");
  }
  res.status(200).json(anims);
};

module.exports = {
  newAnims,
  getAllAnims,
  getSingleAnims,
  deleteAnims,
  updateAnims,
};
