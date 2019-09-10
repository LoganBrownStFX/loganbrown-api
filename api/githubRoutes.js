const express = require("express");
const router = express.Router();
const githubService = require("../services/githubService");

const config = require("../config/config");

const routes = config.ROUTES.GITHUB;
const userName = config.CONSTATNS.USERNAME;

router.get("/test", (req, res) => res.json({ test: "Test" }));

//Route: "/repos"
//Method: GET
//Desc: Get list of repos from github
router.get(routes.GET_REPOS.ENDPOINT, async (req, res) => {
  const repos = await githubService.getRepos(userName);

  res.json({ repos });
});

module.exports = router;
