const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const config = require("./config/config");
const github = require("./api/githubRoutes");
const education = require("./api/educationRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected"))
  .catch(e => console.log(e.message));

app.use("/api/github", github);
app.use("/api/education", education);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
