const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://admin:pomadinha@ac-y9c7cvt-shard-00-00.sqf65s6.mongodb.net:27017,ac-y9c7cvt-shard-00-01.sqf65s6.mongodb.net:27017,ac-y9c7cvt-shard-00-02.sqf65s6.mongodb.net:27017/?ssl=true&replicaSet=atlas-2u9ymb-shard-0&authSource=admin&appName=Cluster0")
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

app.use("/auth", require("./routes/auth.routes"));
app.use("/user", require("./routes/user.routes"));
app.use("/books", require("./routes/book.routes"));
app.use("/reading", require("./routes/reading.routes"));

app.listen(process.env.PORT || 5000, () =>
  console.log("URI:", process.env.MONGO_URI)
);