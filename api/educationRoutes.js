const express = require("express");
const router = express.Router();

const config = require("../config/config");

const routes = config.ROUTES.EDUCATION;
const educationDAO = require("../models/EducationDAO");

router[routes.ADD_EDUCATION.METHOD](
  routes.ADD_EDUCATION.ENDPOINT,
  async (req, res) => {
    try {
      let educationList = await educationDAO.addEducation(req.body);
      res.json({ education: educationList });
    } catch (e) {
      res.json({ error: e.message });
    }
  }
);

router[routes.GET_EDUCATION.METHOD](
  routes.GET_EDUCATION.ENDPOINT,
  async (req, res) => {
    try {
      let educationList = await educationDAO.getEducation();
      res.json({ education: educationList });
    } catch (e) {
      res.json({ errors: e.message });
    }
  }
);
module.exports = router;
