import { GET_EDUCATION, EDUCATION_LOADING } from "../actions/types";

const initialState = {
  education: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDUCATION_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_EDUCATION:
      return {
        ...state,
        education: action.payload,
        loading: false
      };
    default:
      return {
        ...state
      };
  }
}
