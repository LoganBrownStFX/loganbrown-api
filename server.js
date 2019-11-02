const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./config/config");
const github = require("./api/githubRoutes");
const education = require("./api/educationRoutes");
const experience = require("./api/experienceRoutes");
const skill = require("./api/skillRoutes");

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

const connectToDB = process.env.MONGODB_URI || db_string;

mongoose
  .connect(connectToDB, {
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected"))
  .catch(e => console.log(e.message));

app.get("/", (req, res) => res.json({ hello: "hello" }));
app.use("/api/github", github);
app.use("/api/education", education);
app.use("/api/experience", experience);
app.use("/api/skill", skill);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
