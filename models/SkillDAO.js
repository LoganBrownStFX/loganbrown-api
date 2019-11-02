const Skill = require("./Skill");

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
  }
};
