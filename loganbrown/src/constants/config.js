const config = {
  API_URL: {
    DEV_URL: "http://localhost:5000/api/",
    PROD_URL: "loganbrown-api.heroku.com"
  },
  ROUTES: {
    EDUCATION: {
      GET_EDUCATION: "/education/",
      ADD_EDUCATION: "/education/add"
    }
  }
};

export default config;
