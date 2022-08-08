const mongoose = require("mongoose");
const Lang = require("../model/langsModel");

// getall langs : get request
const getAllLangs = async (req, res) => {
  const langs = await Lang.find({}).sort({ createdAt: -1 });
  if (!langs) {
    res.status(400).send("NO POSTS FOUND");
  }
  res.status(200).json(langs);
};

// get single post : get request

const getSingleLang = async (req, res) => {
  const { id } = req.params;

  const langs = await Lang.findById(id);
  if (!langs) {
    res.status(400).send("NO POST FOUND");
  }
  res.status(200).json(langs);
};

// new post creation : post request
const newLang = async (req, res) => {
  const { title, langname, logo } = req.body;
  try {
    const lang = await Lang.create({
      title,
      langname,
      logo,
    });
    res.status(200).json(lang);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete post : delete request

const deleteLang = async (req, res) => {
  const { id } = req.params;
  const langs = await Lang.findByIdAndDelete(id);
  if (!langs) {
    res.status(400).send("NO POST FOUND");
  }
  res.status(200).json(langs);
};
// update post : patch request
const updateLang = async (req, res) => {
  const { id } = req.params;
  //   const { title, description, image, source, alt } = req.body;
  const langs = await Lang.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!langs) {
    res.status(400).send("Something went wrong");
  }
  res.status(200).json(langs);
};

module.exports = {
  newLang,
  getAllLangs,
  getSingleLang,
  deleteLang,
  updateLang,
};
