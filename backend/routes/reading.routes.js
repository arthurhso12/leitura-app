const router = require("express").Router();
const auth = require("../middleware/auth");
const Reading = require("../models/Reading");

// Registrar leitura
router.post("/update", auth, async (req, res) => {
  const { bookId, pages, comment } = req.body;

  let reading = await Reading.findOne({
    userId: req.user.id,
    bookId
  });

  if (!reading) {
    reading = await Reading.create({
      userId: req.user.id,
      bookId,
      pagesRead: 0
    });
  }

  reading.pagesRead += pages;

  reading.logs.push({
    date: new Date(),
    pages,
    comment
  });

  await reading.save();

  res.json(reading);
});

module.exports = router;