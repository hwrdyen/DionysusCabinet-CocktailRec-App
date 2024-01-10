const express = require("express");
var cors = require("cors");
const app = express();
const Dionysus_Cabinet_API_Routes = require("./routes/Dionysus_Cabinet_Routes.js");
const path = require("path");

//configuration
require("dotenv").config();
const PORT = process.env.PORT || 8080;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use("/", Dionysus_Cabinet_API_Routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
