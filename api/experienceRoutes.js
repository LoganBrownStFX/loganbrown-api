const express = require("express");
const router = express.Router();

const config = require("../config/config");
const ExperienceDAO = require("../models/dao/ExperienceDAO");

const routes = config.ROUTES.EXPERIENCE;

router[routes.GET_EXPERIENCE.METHOD](
  routes.GET_EXPERIENCE.ENDPOINT,
  async (req, res) => {
    try {
      let experience = await ExperienceDAO.getExperience();
      res.json(experience);
    } catch (e) {
      console.log(e);
    }
  }
);

router[routes.ADD_EXPERIENCE.METHOD](
  routes.ADD_EXPERIENCE.ENDPOINT,
  async (req, res) => {
    try {
      let experience = await ExperienceDAO.addExperience(req.body);
      res.json(experience);
    } catch (e) {
      console.log(e);
    }
  }
);

module.exports = router;
