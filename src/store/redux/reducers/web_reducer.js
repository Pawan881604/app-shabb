import {
  FETCH_WEB_DETAILS_FAILURE,
  FETCH_WEB_DETAILS_REQUEST,
  FETCH_WEB_DETAILS_SUCCESS,
  FETCH_WEB_ERROR,
  FETCH_WEB_FAILURE,
  FETCH_WEB_REQUEST,
  FETCH_WEB_SUCCESS,
  UPDATE_WEB_DETAILS_FAILURE,
  UPDATE_WEB_DETAILS_REQUEST,
  UPDATE_WEB_DETAILS_RESET,
  UPDATE_WEB_DETAILS_SUCCESS,
  ADD_WEB_DETAILS_FAILURE,
  ADD_WEB_DETAILS_REQUEST,
  ADD_WEB_DETAILS_RESET,
  ADD_WEB_DETAILS_SUCCESS,
} from "../constants/web_actionTypes";

export const web_reducer = (
  state = { web: [] },
  action
) => {
  switch (action.type) {
    case FETCH_WEB_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEB_SUCCESS:
      return {
        ...state,
        loading: false,
        web: action.payload.web_data,
        count_web: action.payload.count_website,
        resultPerpage: action.payload.resultPerpage,
      };
    case FETCH_WEB_FAILURE:
      return {
        ...state,
        loading: false,
        web: null,
        error: action.payload,
      };
    case FETCH_WEB_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
