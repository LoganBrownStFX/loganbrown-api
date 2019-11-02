const express = require("express");
const router = express.Router();

const config = require("../config/config");
const SkillDAO = require("../models/SkillDAO");

const routes = config.ROUTES.SKILL;

router[routes.ADD_SKILL.METHOD](routes.ADD_SKILL.ENDPOINT, async (req, res) => {
  try {
    let data = await SkillDAO.addSkill(req.body);
    res.json(data);
  } catch (e) {
    console.log(e.message);
  }
});

router[routes.GET_SKILL.METHOD](routes.GET_SKILL.ENDPOINT, async (req, res) => {
  try {
    let skillObj = await SkillDAO.getSkill();
    res.json(skillObj);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
