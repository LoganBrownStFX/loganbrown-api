const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  roleTitle: {
    type: String,
    required: true
  },
  responsibilities: {
    type: String
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Experience = mongoose.model("experience", ExperienceSchema);
