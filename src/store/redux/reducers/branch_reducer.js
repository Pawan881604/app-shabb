import {
  FETCH_BRANCH_DETAILS_FAILURE,
  FETCH_BRANCH_DETAILS_REQUEST,
  FETCH_BRANCH_DETAILS_SUCCESS,
  FETCH_BRANCH_ERROR,
  FETCH_BRANCH_FAILURE,
  FETCH_BRANCH_REQUEST,
  FETCH_BRANCH_SUCCESS,
  UPDATE_BRANCH_DETAILS_FAILURE,
  UPDATE_BRANCH_DETAILS_REQUEST,
  UPDATE_BRANCH_DETAILS_RESET,
  UPDATE_BRANCH_DETAILS_SUCCESS,
  ADD_BRANCH_DETAILS_FAILURE,
  ADD_BRANCH_DETAILS_REQUEST,
  ADD_BRANCH_DETAILS_RESET,
  ADD_BRANCH_DETAILS_SUCCESS,
} from "../constants/branch_actionTypes";

export const branch_reducer = (state = { branch: [] }, action) => {
  switch (action.type) {
    case FETCH_BRANCH_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BRANCH_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        branch: action.payload.branch,
        count_branch: action.payload.count_branch,
        resultPerpage: action.payload.resultPerpage,
      };

    case FETCH_BRANCH_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        branch: null,
        error: action.payload,
      };

    case FETCH_BRANCH_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
