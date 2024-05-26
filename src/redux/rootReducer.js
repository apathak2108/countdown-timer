import { combineReducers } from "redux";
import { setCountdownValuesReducer } from "./reducers";

const rootReducer = combineReducers({
  countdown: setCountdownValuesReducer,
});

export default rootReducer;
