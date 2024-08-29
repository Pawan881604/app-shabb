import axiosInstance from "../lib/AxiosInstance";
import { getSiteURL } from "../lib/get-site-url";
import { get_method } from "../lib/headers";
import {
  FETCH_BRANCH_DETAILS_FAILURE,
  FETCH_BRANCH_DETAILS_REQUEST,
  FETCH_BRANCH_DETAILS_SUCCESS,
  FETCH_BRANCH_ERROR,
} from "../store/redux/constants/branch_actionTypes";
const baseusel = getSiteURL();
export const get_branch_details = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_BRANCH_DETAILS_REQUEST });
    const { data } = await axiosInstance.get(
      `${baseusel}/api/v1/branchs`,
      get_method()
    );

    dispatch({ type: FETCH_BRANCH_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_BRANCH_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: FETCH_BRANCH_ERROR });
};
