import { combineReducers } from "redux";
import estimateReducer from "./estimates/estimateReducer";
import messages from "./message/message";

const rootReducer = combineReducers({
  estimate: estimateReducer,
  message: messages,
});

export default rootReducer;
