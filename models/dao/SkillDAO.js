const Skill = require("../Skill");
const Who = require("../WhoAmI")

module.exports = {
  addSkill: async function(data) {
    const newSkill = new Skill({
      skillType: data.skillType,
      level: data.level
    });

    try {
      return await newSkill.save();
    } catch (e) {
      return { error: e.message };
    }
  },
  getSkill: async function() {
    try {
      return await Skill.find();
    } catch (e) {
      return { error: e.message };
    }
  },
  addWho: async function(data){
    const newWho = new Who({
      key: data.key,
      body: data.body
    })

    try{
      return await newWho.save();
    }catch(e){
      return { error: e.message }
    }
  },
  getWho: async function(){
    try{
      return await Who.find();  
    }catch(e){
      return { error: e.message }
    }
  }
};
