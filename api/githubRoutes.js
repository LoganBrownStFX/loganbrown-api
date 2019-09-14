const express = require("express");
const router = express.Router();
const axios = require("axios");

const config = require("../config/config");

const routes = config.ROUTES.GITHUB;
const userName = config.CONSTATNS.USERNAME;

//Initailize Service
let githubService = require("../services/githubService");
githubService = new githubService();

//Route: "/repos"
//Method: GET
//Desc: Get list of repos from github
router[routes.GET_REPOS.METHOD](routes.GET_REPOS.ENDPOINT, async (req, res) => {
  const toms = await githubService.getRepos(userName);
  console.log(toms);
});
module.exports = router;
