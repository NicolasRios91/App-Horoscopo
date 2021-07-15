import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import dataSignReducer from "./dataSignReducer";
const allReducers = combineReducers({
  dataReducer: dataReducer,
  dataSignReducer: dataSignReducer,
});

export default allReducers;
