const config = require("../config/config");
const axios = require("axios");

const gitURL = config.CONSTATNS.URLS.GITHUB;
const userName = config.CONSTATNS.USERNAME;

module.exports = class githubService {
  async getRepos(userName) {
    let response;
    try {
      response = await axios.get(gitURL + "users/" + userName + "/repos");
    } catch (err) {
      console.log(err);
    }

    const repoNames = Object.values(response.data);

    for (let i = 0; i < repoNames.length; i++) {
      repoNames[i] = repoNames[i].name;
    }
    return await this.getCommits(repoNames);
  }

  
  async getCommits() {
    let repoNames = ["loganbrownstfx.github.io", "loganbrown-api"],
    commits = [];
    for (let i = 0; i < repoNames.length; i++) {
      try {
        commits[i] = await axios.get(
          gitURL + "repos/" + userName + "/" + repoNames[i] + "/commits"
        );
      } catch (err) {
        console.log(err);
      }
    }
   
    return this.formatCommits(commits, repoNames);
  }

  formatCommits(commits, repoNames){
    let formattedCommits = [];
    
    console.log(commits[1].data[0]);

    for(let i = 0; i < commits.length; i++){
      for(let j = 0; j < commits[i].data.length; j++){
        let newCommit = {};
        newCommit.repo = repoNames[i];
        newCommit.message = commits[i].data[j].commit.message;
        newCommit.date = commits[i].data[j].commit.committer.date;
        formattedCommits.push(newCommit);
      }
      
    }
    
    return formattedCommits;
  }

};
