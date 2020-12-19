import { combineReducers } from "redux";

import nominationReducer from "./nominationReducer";

export default combineReducers({
    nominations: nominationReducer,
});
