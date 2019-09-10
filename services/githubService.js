const config = require("../config/config");
const axios = require("axios");

const gitURL = config.CONSTATNS.URLS.GITHUB;

module.exports = class githubService {
  getRepos = function(userName) {
    axios.get(gitURL + "users/" + userName + "/repos").then(res => {
      return res.data.url;
    });
  };
};
