const router = require("express").Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// pegar dados do usuário logado
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

module.exports = router;