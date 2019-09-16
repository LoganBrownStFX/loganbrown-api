import axios from "axios";

export async function getEducationCall() {
  try {
    let educationObj = await axios.get("/education/");
    return educationObj;
  } catch (e) {
    return {
      errors: true,
      body: e.message
    };
  }
}
