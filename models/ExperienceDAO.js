const Experience = require("./Experience");

module.exports = {
  getExperience: async function() {
    try {
      let experienceList = await Experience.find();
      return experienceList;
    } catch (e) {
      console.log("No education Found");
      return {};
    }
  },
  addExperience: async function(data) {
    const newExperience = new Experience({
      company: data.company,
      roleTitle: data.roleTitle,
      responsibilities: data.responsibilities,
      startDate: data.startDate,
      endDate: data.startDate
    });

    try {
      return await newExperience.save();
    } catch (e) {
      console.log(e.message);
      return {};
    }
  }
};
