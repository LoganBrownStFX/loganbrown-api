const express = require("express");
const path = require("path");

const github = require("./api/githubRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/github", github);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("loganbrown/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "loganbrown", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port}`));
