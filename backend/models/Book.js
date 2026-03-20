const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  pages: Number,
  cover: String,
  genre: String
});

module.exports = mongoose.model("Book", bookSchema);