const config = {
  ROUTES: {
    GITHUB: {
      GET_REPOS: {
        ENDPOINT: "/commits",
        METHOD: "get"
      }
    },
    EDUCATION: {
      ADD_EDUCATION: {
        ENDPOINT: "/add",
        METHOD: "post"
      },
      GET_EDUCATION: {
        ENDPOINT: "/",
        METHOD: "get"
      }
    },
    EXPERIENCE: {
      ADD_EXPERIENCE: {
        ENDPOINT: "/add",
        METHOD: "post"
      },
      GET_EXPERIENCE: {
        ENDPOINT: "/",
        METHOD: "get"
      }
    },
    SKILL: {
      ADD_SKILL: {
        ENDPOINT: "/add",
        METHOD: "post"
      },
      GET_SKILL: {
        ENDPOINT: "/",
        METHOD: "get"
      },
      ADD_WHO_FIELD:{
        ENDPOINT: "/who/add",
        METHOD: "post"
      },
      GET_WHO_FIELDS:{
        ENDPOINT: "/who",
        METHOD: "get"
      }
    },
  },
  CONSTATNS: {
    URLS: {
      GITHUB: "https://api.github.com/"
    },
    USERNAME: "loganbrownstfx"
  },
  DB: {
    CONNECTION_STRING:
      "mongodb+srv://admin:admin@cluster0-vzxp1.mongodb.net/test?retryWrites=true&w=majority"
  }
};

module.exports = config;
