const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  skillType: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  }
});

module.exports = Skill = mongoose.model("skill", SkillSchema);
