import isIntroReducer from "./isIntroReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isIntro: isIntroReducer,
});
export default allReducers;
