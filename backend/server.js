const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express(); // ✅ PRIMEIRO

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://seu-frontend.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("CORS não permitido"));
  },
  credentials: true
}));
app.use(express.json());

// CONEXÃO COM MONGO
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

// ROTAS
app.use("/auth", require("./routes/auth.routes"));
app.use("/user", require("./routes/user.routes"));
app.use("/books", require("./routes/book.routes"));
app.use("/reading", require("./routes/reading.routes"));

// ROTA TESTE
app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

// SERVIDOR
app.listen(PORT, () => {
  console.log("Servidor rodando 🚀");
});