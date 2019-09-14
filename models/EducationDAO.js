const Education = require("./Education");
const mongoose = require("mongoose");

module.exports = {
  getEducation: async function() {
    try {
      let educationList = await Education.find();
      return educationList;
    } catch (e) {
      console.log("No Education Found");
      return {};
    }
  },
  addEducation: async function(data) {
    const newEducation = new Education({
      issuer: data.issuer,
      startDate: data.startDate,
      endDate: data.endDate,
      description: data.description,
      courses: data.courses
    });

    try {
      return await newEducation.save();
    } catch (e) {
      console.log(e.message);
      return {};
    }
  }
};
