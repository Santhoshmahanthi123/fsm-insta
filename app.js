const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/privacy", (req, res) => {
  res.render("privacy");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => {
  console.log(`server started on port:${port}`);
});
