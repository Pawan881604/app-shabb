import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { otpReducer, userReducer } from "./redux/reducers/user_reducer";

const reducer = combineReducers({
  user: userReducer,
  otp:otpReducer,
});

let inialState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  inialState,
  applyMiddleware(...middleware)
);
