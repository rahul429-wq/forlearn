const express = require("express");
const {
  newLang,
  getAllLangs,
  getSingleLang,
  deleteLang,
  updateLang,
} = require("../controllers/langsContoller");
const router = express.Router();

// GET all posts
router.get("/", getAllLangs);

// GET a single post
router.get("/:id", getSingleLang);

// POST a a new post
router.post("/", newLang);

// DELETE a post
router.delete("/:id", deleteLang);

// UPDATE a post
router.patch("/:id", updateLang);

module.exports = router;
