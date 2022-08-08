const express = require("express");
const {
  newAnims,
  getAllAnims,
  getSingleAnims,
  deleteAnims,
  updateAnims,
} = require("../controllers/animsController");
const router = express.Router();

// GET all posts
router.get("/", getAllAnims);

// GET a single post
router.get("/:id", getSingleAnims);

// POST a a new post
router.post("/", newAnims);

// DELETE a post
router.delete("/:id", deleteAnims);

// UPDATE a post
router.patch("/:id", updateAnims);

module.exports = router;
