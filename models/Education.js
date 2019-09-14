const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
  issuer: {
    type: String,
    require: true
  },
  startDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  endDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  courses: [
    {
      name: {
        type: String,
        required: true
      },
      grade: {
        type: Number,
        required: true
      },
      completetion: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Education = mongoose.model("education", EducationSchema);
