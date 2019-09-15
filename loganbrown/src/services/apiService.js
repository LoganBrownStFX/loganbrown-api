import axios from "axios";
import config from "../constants/config";

const apiUrl = config.API_URL;
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
