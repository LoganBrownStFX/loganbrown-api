const express = require("express");
const router = express.Router();

const config = require("../config/config");
const SkillDAO = require("../models/dao/SkillDAO");

const routes = config.ROUTES.SKILL;

router[routes.ADD_SKILL.METHOD](routes.ADD_SKILL.ENDPOINT, async (req, res) => {
  let data;
  try {
    data = await SkillDAO.addSkill(req.body);
  } catch (e) {
    data = { error: e.message }
  }finally{
    res.json(data);
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

router[routes.ADD_WHO_FIELD.METHOD](routes.ADD_WHO_FIELD.ENDPOINT, async (req,res)=>{
  let data;
  try{
    data = await SkillDAO.addWho(req.body);
  }catch(e){
    data = {error: e.message}
  }finally{
    res.json(data);
  }
})


router[routes.GET_WHO_FIELDS.METHOD](routes.GET_WHO_FIELDS.ENDPOINT, async(req, res) =>{
  let data; 
  try{
    data = await SkillDAO.getWho();
  }catch(e){
    data = { error: e.message }
  }finally{
    res.json(data);
  }
})

module.exports = router;
