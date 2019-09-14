import { GET_EDUCATION, EDUCATION_LOADING } from "./types";
import { getEducationCall } from "../../services/apiService";

export function getEducation() {
  return async dispatch => {
    try {
      const res = await getEducationCall();
      dispatch({
        type: GET_EDUCATION,
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: GET_EDUCATION,
        payload: {}
      });
    }
  };
}

export const educationLoading = () => {
  return {
    type: EDUCATION_LOADING
  };
};
