const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

if (process.nextTick.NODE_ENV === "production") {
  app.use(express.static("loganbrown/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port}`));
