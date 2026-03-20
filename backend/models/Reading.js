const mongoose = require("mongoose");

const readingSchema = new mongoose.Schema({
  userId: String,
  bookId: String,
  pagesRead: { type: Number, default: 0 },
  logs: [
    {
      date: Date,
      pages: Number,
      comment: String
    }
  ]
});

module.exports = mongoose.model("Reading", readingSchema);