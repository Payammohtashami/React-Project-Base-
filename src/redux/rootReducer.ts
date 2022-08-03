import { combineReducers } from "redux";
import theme from "./store/theme/reducer";

const rootReducer = combineReducers({
    theme
});
export default rootReducer;