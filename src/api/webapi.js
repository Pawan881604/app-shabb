import axiosInstance from "../lib/AxiosInstance";
import { getSiteURL } from "../lib/get-site-url";
import { get_method } from "../lib/headers";
import {
  FETCH_WEB_FAILURE,
  FETCH_WEB_REQUEST,
  FETCH_WEB_SUCCESS,
} from "../store/redux/constants/web_actionTypes";
const baseusel = getSiteURL();
export const get_all_website = () => async (dispatch) => {
  try {
 
    dispatch({ type: FETCH_WEB_REQUEST });
    const { data } = await axiosInstance.get(
      `${baseusel}/api/v1/websites`,
      get_method()
    );

    dispatch({ type: FETCH_WEB_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_WEB_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: FETCH_WEB_FAILURE });
  };
  