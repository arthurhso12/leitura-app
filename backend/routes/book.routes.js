const router = require("express").Router();
const Book = require("../models/Book");

// Buscar livros
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

module.exports = router;