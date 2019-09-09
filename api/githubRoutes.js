const express = require("express");
const router = express.Router();

const config = require("../config/config");

routes = config.ROUTES.GITHUB;

router.get('/test', (req, res) => res.json({test: "Test"}));

console.log(routes.GET_REPOS.ENDPOINT);
//Get github repos from profile
router[routes.GET_REPOS](routes.GET_REPOS.ENDPOINT, (req, res) => res.json ({getRepos: "get_repos"}));

module.exports = router;